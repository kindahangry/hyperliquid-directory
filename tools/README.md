# Developer Tools

SDKs, CLIs, scripts, and other dev tooling for building on Hyperliquid.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "tools": [
    {
      "name": "Tool Name",
      "description": "What this tool does",
      "url": "https://github.com/your-org/tool-repo",
      "type": "sdk",
      "language": "Python"
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **tools** (required): Array of tools you provide
  - **name** (required): Tool name
  - **description** (required): What the tool does
  - **url** (optional): Link to repository or download
  - **type** (optional): Tool type - `"sdk"`, `"cli"`, `"script"`, `"client"`, or `"other"`
  - **language** (optional): Programming language(s) used

## Tool Types

- **SDK**: Software Development Kit for integrating with Hyperliquid
- **CLI**: Command-line interface tools
- **Script**: Automation scripts and utilities
- **Client**: API clients and wrappers
- **Other**: Any other development tool

## Examples

### Simple SDK
```json
{
  "entity": "python-dev",
  "tools": [
    {
      "name": "hyperliquid-python",
      "description": "Python SDK for interacting with Hyperliquid blockchain and DEX",
      "url": "https://github.com/python-dev/hyperliquid-python",
      "type": "sdk",
      "language": "Python"
    }
  ]
}
```

### Multiple Tools
```json
{
  "entity": "dev-toolkit",
  "tools": [
    {
      "name": "HL CLI",
      "description": "Command-line tool for Hyperliquid node management",
      "url": "https://github.com/dev-toolkit/hl-cli",
      "type": "cli",
      "language": "Go"
    },
    {
      "name": "HL.js",
      "description": "JavaScript/TypeScript SDK with full TypeScript support",
      "url": "https://github.com/dev-toolkit/hl-js",
      "type": "sdk",
      "language": "TypeScript"
    },
    {
      "name": "Block Monitor",
      "description": "Real-time block monitoring and alerting script",
      "url": "https://github.com/dev-toolkit/block-monitor",
      "type": "script",
      "language": "Python"
    }
  ]
}
```

## Contributing

1. Add your resource: `apis/your-entity.json`
2. Run `npm run validate`
3. Submit PR
