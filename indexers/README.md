# Blockchain Data Indexers

Blockchain data platforms and indexers providing comprehensive data access for Hyperliquid.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "indexers": [
    {
      "name": "Indexer Name",
      "url": "https://api.your-service.com"
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **indexers** (required): Array of indexers you provide
  - **name** (required): Indexer display name
  - **url** (required): Indexer URL or documentation
  - **type** (optional): Indexer type - `"blockchain-data"`, `"defi"`, `"nft"`, `"analytics"`, or `"other"`
  - **description** (optional): What data/functionality the indexer provides
      - **documentation** (optional): Link to indexer documentation
    - **playground** (optional): Link to query playground
    - **features** (optional): Array of features/data types available

## Indexer Types

- **Blockchain Data**: Comprehensive blockchain data indexing
- **DeFi**: DeFi-specific analytics and indexing
- **NFT**: NFT data and metadata indexing
- **Analytics**: Advanced analytics platforms
- **Other**: Other indexer types

## Examples

### Simple Indexer
```json
{
  "entity": "basic-indexer",
  "indexers": [
    {
      "name": "Hyperliquid Indexer",
      "type": "blockchain-data",
      "description": "Real-time indexing of all Hyperliquid blockchain data",
      "url": "https://api.basic-indexer.com"
    }
  ]
}
```

### Advanced Indexer Platform
```json
{
  "entity": "comprehensive-data",
  "indexers": [
    {
      "name": "Multi-Chain Indexer Platform",
      "type": "blockchain-data",
      "description": "Comprehensive blockchain data platform with SQL interface",
      "url": "https://platform.comprehensive-data.com",
      "documentation": "https://docs.comprehensive-data.com",
      "playground": "https://platform.comprehensive-data.com/query",
      "features": [
        "real-time blocks",
        "historical transactions",
        "decoded events",
        "token transfers",
        "DeFi analytics",
        "validator metrics"
      ]
    }
  ]
}
```

## Contributing

1. Fork
1. Add your resource: `apis/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Open a PR