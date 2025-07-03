# Data APIs

Indexers, subgraphs, and data APIs providing programmatic access to Hyperliquid data.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "apis": [
    {
      "name": "API Name",
      "type": "indexer",
      "description": "What data this API provides",
      "url": "https://api.your-service.com/v1",
      "documentation": "https://docs.your-service.com",
      "playground": "https://api.your-service.com/playground",
      "features": ["transactions", "blocks", "events"],
      "rateLimits": {
        "requests_per_second": 10
      }
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **apis** (required): Array of APIs you provide
  - **name** (required): API display name
  - **type** (required): API type - `"indexer"`, `"subgraph"`, `"rest"`, `"graphql"`, `"websocket"`, or `"other"`
  - **description** (required): What data/functionality the API provides
  - **url** (optional): Base URL for the API
  - **documentation** (optional): Link to API documentation
  - **playground** (optional): Link to interactive API explorer
  - **features** (optional): Array of features/data types available
  - **rateLimits** (optional): Rate limiting information

## API Types

- **Indexer**: Real-time blockchain data indexing service
- **Subgraph**: The Graph protocol subgraph
- **REST**: RESTful API endpoints
- **GraphQL**: GraphQL API endpoints
- **WebSocket**: Real-time WebSocket connections
- **Other**: Other API types

## Examples

### Simple Indexer
```json
{
  "entity": "basic-indexer",
  "apis": [
    {
      "name": "Hyperliquid Indexer",
      "type": "indexer",
      "description": "Real-time indexing of all Hyperliquid blockchain data",
      "url": "https://api.basic-indexer.com"
    }
  ]
}
```

### Advanced API with Multiple Endpoints
```json
{
  "entity": "comprehensive-data",
  "apis": [
    {
      "name": "Hyperliquid GraphQL API",
      "type": "graphql",
      "description": "GraphQL interface for querying blockchain and DeFi data",
      "url": "https://graphql.comprehensive-data.com",
      "documentation": "https://docs.comprehensive-data.com/graphql",
      "playground": "https://graphql.comprehensive-data.com/playground",
      "features": [
        "real-time blocks",
        "historical transactions",
        "token transfers",
        "DeFi positions",
        "validator info"
      ],
      "rateLimits": {
        "requests_per_second": 50,
        "requests_per_minute": 2000
      }
    },
    {
      "name": "DEX Subgraph",
      "type": "subgraph",
      "description": "Subgraph indexing all DEX activity on Hyperliquid",
      "url": "https://api.thegraph.com/subgraphs/name/comprehensive/hyperliquid-dex",
      "playground": "https://thegraph.com/explorer/subgraph/comprehensive/hyperliquid-dex",
      "features": [
        "swap events",
        "liquidity pools",
        "volume metrics",
        "user positions"
      ]
    }
  ]
}
```

## Best Practices

1. **Reliability**: Maintain high uptime and data accuracy
2. **Performance**: Optimize query response times
3. **Documentation**: Provide clear API docs with examples
4. **Versioning**: Use API versioning for backward compatibility
5. **Security**: Implement proper authentication and rate limiting

## Common API Features

- Block and transaction data
- Event logs and filtering
- Token balances and transfers
- Smart contract state queries
- Historical data access
- Real-time subscriptions
- Aggregated analytics

## Contributing

1. Fork the repository
2. Create your API file: `apis/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Submit a pull request

Your APIs enable developers to build data-driven applications on Hyperliquid. 