# Analytics Dashboards

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "dashboards": [
    {
      "name": "Dashboard Name",
      "url": "https://your-dashboard.com",
      "description": "What insights this dashboard provides",
      "type": "dune"
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **dashboards** (required): Array of analytics dashboards
  - **name** (required): Display name for the dashboard
  - **url** (required): Direct link to the dashboard
  - **description** (required): What data/insights the dashboard provides
  - **type** (optional): Platform type - `"dune"`, `"custom"`, or `"other"`

## Dashboard Types

- **Dune Analytics**: SQL-based blockchain analytics platform
- **Custom**: Custom analytics solutions you maintain
- **Other**: Alternative analytics platforms (Flipside, etc.)

## Examples

### Single Dashboard
```json
{
  "entity": "defi-analytics",
  "dashboards": [
    {
      "name": "Hyperliquid DeFi Overview",
      "url": "https://dune.com/defi-analytics/hyperliquid-defi",
      "description": "TVL, volume, and user metrics for Hyperliquid DeFi protocols",
      "type": "dune"
    }
  ]
}
```

### Multiple Dashboards
```json
{
  "entity": "comprehensive-analytics",
  "dashboards": [
    {
      "name": "Network Health Monitor",
      "url": "https://analytics.example.com/network",
      "description": "Real-time network performance and validator metrics",
      "type": "custom"
    },
    {
      "name": "Token Economics",
      "url": "https://dune.com/example/token-economics",
      "description": "Supply distribution, staking rates, and inflation metrics",
      "type": "dune"
    }
  ]
}
```

## Contributing

1. Fork
2. Add your resource : `analytics/your-entity.json`
3. Pass validation: `npm run validate`
4. Submit a PR