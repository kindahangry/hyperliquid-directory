# Developer APIs

API endpoints and documentation for developers.

## File Format

```json
{
  "entity": "your-entity-name",
  "apis": [
    {
      "name": "Your API",
      "url": "https://docs.your-api.com"
    }
  ]
}
```

## Fields

- **entity** (required): Match your filename
- **apis** (required): Your APIs
  - **name** (required): API name
  - **url** (required): Link to docs or endpoint
  - **description** (optional): What it does

## Examples

```json
{
  "entity": "my-explorer",
  "apis": [
    {
      "name": "Explorer API",
      "url": "https://explorer.com/api-docs"
    }
  ]
}
```

```json
{
  "entity": "data-provider",
  "apis": [
    {
      "name": "Blockchain Data API",
      "url": "https://api.data-provider.com/docs",
      "description": "Real-time and historical blockchain data"
    },
    {
      "name": "WebSocket Feed",
      "url": "wss://stream.data-provider.com",
      "description": "Live data streaming"
    }
  ]
}
```

## Contributing

1. Add your API: `apis/your-entity.json`
2. Run `npm run validate`
3. Submit PR
