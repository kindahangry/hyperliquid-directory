# Hyperliquid Directory

Community-maintained index of public infrastructure for Hyperliquid.

## Categories

- **[RPCs](rpcs/)** - Public RPC endpoints
- **[Peers](peers/)** - P2P node addresses  
- **[Explorers](explorers/)** - Block explorers & dashboards
- **[Meta](meta/)** - Provider info (logos, websites, socials)
- **[Analytics](analytics/)** - Dashboards (Dune, self-hosted, etc)
- **[Tools](tools/)** - SDKs, CLIs, scripts, clients
- **[APIs](apis/)** - Indexers, subgraphs, data APIs
- **[Guides](guides/)** - Tutorials, videos, educational content

Each category has its own README with detailed documentation.

## How it works

1. Each provider = one JSON file per category
2. CI validates all submissions automatically
3. Everything aggregates at https://hyperliquid.directory

## Quick start

```bash
# Fork & clone
git clone https://github.com/<you>/hyperliquid-directory.git
cd hyperliquid-directory

# Example: Add your RPC endpoint
cat > rpcs/my-provider.json << EOF
{
  "entity": "my-provider",
  "endpoints": [{
    "url": "https://rpc.my-provider.com/evm",
    "description": "Fast and reliable Hyperliquid RPC"
  }]
}
EOF

# Add your provider info (recommended)
cat > meta/my-provider.json << EOF
{
  "name": "My Provider",
  "website": "https://my-provider.com",
  "description": "Professional infrastructure for Hyperliquid",
  "socials": ["https://x.com/myprovider"]
}
EOF

# Test locally
npm install && npm run validate

# Submit
git add . && git commit -m "add my-provider RPC and meta" && git push
# Then open a pull request
```

See category READMEs for complete file format documentation.

## Public RPC

`https://rpc.hyperliquid.directory/evm`

Load-balanced across all community endpoints. Rate limits per IP:
- 10 req/s
- 800 req/10s
- 3,840 req/min
- 30,720 req/10min
- 147,456 req/hour

Live status: https://hyperliquid.directory/rpcs

## Rules

- One provider = one JSON file per category
- Entity names must match across files (e.g., `validao` everywhere)
- Logos: ≤2MB, ideally ≤512×512px
- CI blocks merge if validation fails

## Contributing

1. Check the README in the relevant category folder for file format
2. Create your JSON file(s)
3. Run validation locally
4. Submit a PR

See individual category READMEs for detailed examples and best practices.

## Validation

The `npm run validate` command checks all JSON files against their schemas. It ensures:
- Valid JSON syntax
- Required fields are present
- URLs are properly formatted
- Entity names match filenames

No warnings should appear - just green checkmarks for valid files.