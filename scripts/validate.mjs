#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { relative, resolve, dirname } from 'node:path';
import process from 'node:process';
import { globby } from 'globby';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);

// Load all schema files first so $ref works across them
async function loadSchemas() {
  const schemaPaths = await globby('.github/schemas/*.json');
  await Promise.all(schemaPaths.map(async (p) => {
    const data = JSON.parse(await readFile(p, 'utf8'));
    // Use absolute $id so Ajv can resolve refs
    if (!data.$id || data.$id.startsWith('file:') === false) {
      data.$id = `file://${resolve(p)}`;
    }
    ajv.addSchema(data);
  }));
}

async function validateFiles() {
  const jsonPaths = await globby(['rpcs/*.json', 'peers/*.json', 'explorers/*.json', 'meta/*.json', 'analytics/*.json', 'tools/*.json', 'indexers/*.json', 'guides/*.json', 'apis/*.json']);
  let hasError = false;

  for (const p of jsonPaths) {
    const raw = await readFile(p, 'utf8');
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (err) {
      console.error(`❌  Invalid JSON syntax in ${p}:`, err.message);
      hasError = true;
      continue;
    }

    const schemaField = obj.$schema;
    let schemaPath;
    if (schemaField) {
      schemaPath = resolve(dirname(p), schemaField);
    } else {
      // Infer schema path based on the folder the file lives in
      const base = p.split('/')[0];
      switch (base) {
        case 'rpcs':
          schemaPath = resolve('.github/schemas/rpc.schema.json');
          break;
        case 'peers':
          schemaPath = resolve('.github/schemas/peer.schema.json');
          break;
        case 'explorers':
          schemaPath = resolve('.github/schemas/explorer.schema.json');
          break;
        case 'meta':
          schemaPath = resolve('.github/schemas/meta.schema.json');
          break;
        case 'analytics':
          schemaPath = resolve('.github/schemas/analytics.schema.json');
          break;
        case 'tools':
          schemaPath = resolve('.github/schemas/tools.schema.json');
          break;
        case 'indexers':
          schemaPath = resolve('.github/schemas/indexer.schema.json');
          break;
        case 'apis':
          schemaPath = resolve('.github/schemas/api.schema.json');
          break;
        case 'guides':
          schemaPath = resolve('.github/schemas/guide.schema.json');
          break;
        default:
          console.error(`❌  Cannot infer schema for ${p}. Please add $schema field.`);
          hasError = true;
          continue;
      }
    }

    let validate = ajv.getSchema(`file://${schemaPath}`);
    if (!validate) {
      const schemaData = JSON.parse(await readFile(schemaPath, 'utf8'));
      // ensure absolute id
      if (!schemaData.$id || schemaData.$id.startsWith('file:') === false) {
        schemaData.$id = `file://${schemaPath}`;
      }
      validate = ajv.compile(schemaData);
    }

    const valid = validate(obj);
    if (!valid) {
      hasError = true;
      console.error(`❌  Schema errors in ${p}:`);
      for (const err of validate.errors ?? []) {
        console.error(`   • ${err.instancePath || err.dataPath} ${err.message}`);
      }
    } else {
      console.log(`✅  ${p} is valid`);
    }
  }

  if (hasError) {
    console.error('\nValidation failed.');
    process.exit(1);
  } else {
    console.log('\nAll files valid.');
  }
}

await loadSchemas();
await validateFiles();
