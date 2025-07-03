# Analytics Dashboards

Analytics platforms and dashboards providing insights into the Hyperliquid ecosystem.

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
  - **type** (optional): Platform type - `"dune"`, `"self-hosted"`, or `"other"`

## Dashboard Types

- **Dune Analytics**: SQL-based blockchain analytics platform
- **Self-hosted**: Custom analytics solutions you maintain
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
      "type": "self-hosted"
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

## Best Practices

1. **Accuracy**: Ensure data sources are reliable and queries are correct
2. **Performance**: Optimize dashboard load times
3. **Documentation**: Explain metrics and data sources
4. **Updates**: Keep dashboards current with latest data
5. **Accessibility**: Make dashboards public when possible

## Common Analytics Topics

- Network statistics (TPS, block times, fees)
- DeFi metrics (TVL, volume, liquidity)
- Validator performance and distribution
- Token economics and distribution
- User activity and growth
- Cross-chain bridge activity
- Smart contract interactions

## Contributing

1. Fork the repository
2. Create your analytics file: `analytics/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Submit a pull request

Your dashboards help the community understand and analyze the Hyperliquid ecosystem. 