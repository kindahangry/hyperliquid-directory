# RPC Endpoints

Public RPC endpoints for interacting with the Hyperliquid blockchain.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "endpoints": [
    {
      "name": "Provider Name",
      "url": "https://your-rpc-endpoint.com/evm",
      "description": "Brief description of your RPC service",
      "rateLimits": {
        "requests_per_second": 10,
        "requests_per_minute": 600
      }
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **endpoints** (required): Array of RPC endpoints you provide
  - **name** (optional): Display name for this endpoint
  - **url** (required): The full RPC endpoint URL
  - **description** (optional): Brief description of the endpoint
  - **rateLimits** (optional): Object with rate limit details
    - Can include any key-value pairs like `requests_per_second`, `requests_per_minute`, etc.

## Best Practices

1. **Reliability**: Ensure your RPC endpoint has high uptime
2. **Performance**: Optimize for low latency responses
3. **Rate Limits**: Clearly document any rate limiting
4. **HTTPS**: Always use secure connections
5. **Load Balancing**: Consider geographic distribution for better performance

## Examples

### Simple RPC
```json
{
  "entity": "simple-provider",
  "endpoints": [
    {
      "url": "https://rpc.simple-provider.com/evm",
      "description": "Free community RPC"
    }
  ]
}
```

### Advanced RPC with Multiple Endpoints
```json
{
  "entity": "advanced-provider",
  "endpoints": [
    {
      "name": "EU Region",
      "url": "https://eu.rpc.advanced-provider.com/evm",
      "description": "European RPC endpoint with low latency",
      "rateLimits": {
        "requests_per_second": 50,
        "requests_per_minute": 2000
      }
    },
    {
      "name": "US Region",
      "url": "https://us.rpc.advanced-provider.com/evm",
      "description": "US RPC endpoint optimized for Americas",
      "rateLimits": {
        "requests_per_second": 50,
        "requests_per_minute": 2000
      }
    }
  ]
}
```

## Public Load Balancer

All community RPCs are aggregated into a single load-balanced endpoint:

`https://rpc.hyperliquid.directory/evm`

This provides:
- Automatic failover between providers
- Geographic routing for optimal latency
- Aggregated rate limits across all providers
- Health monitoring and automatic exclusion of failing endpoints

## Contributing

1. Fork the repository
2. Create your RPC file: `rpcs/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Submit a pull request

Your RPC will be automatically included in the load balancer once merged.