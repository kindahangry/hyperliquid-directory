# Educational Guides

Educational content about Hyperliquid.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following:

```json
{
  "entity": "your-entity-name",
  "guides": [
    {
      "title": "Guide Title",
      "description": "What this guide teaches",
      "url": "https://your-guide-url.com",
      "difficulty": "beginner",
      "topics": ["defi", "trading", "development"]
    }
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **guides** (required): Array of educational guides
  - **title** (required): Guide title
  - **description** (required): What the guide covers
  - **url** (required): Direct link to the guide
  - **difficulty** (optional): Difficulty level - `"beginner"`, `"intermediate"`, or `"advanced"`
  - **topics** (optional): Array of topics covered

## Examples

### Simple Guide
```json
{
  "entity": "HIP-1-education",
  "guides": [
    {
      "title": "Getting Started with HIP-1",
      "description": "Complete beginner's guide to deploying a spot token",
      "url": "https://blog.example.com/hyperliquid-intro"
    }
  ]
}
```

### Comprehensive Guide Collection
```json
{
  "entity": "hyperliquid-academy",
  "guides": [
    {
      "title": "Hyperliquid Trading 101",
      "description": "Learn the basics of trading on Hyperliquid DEX",
      "url": "https://academy.example.com/trading-basics",
      "difficulty": "beginner",
      "topics": ["trading", "defi"]
    },
    {
      "title": "Building on Hyperliquid",
      "description": "Developer guide for creating smart contracts on Hyperliquid",
      "url": "https://academy.example.com/dev-guide",
      "difficulty": "intermediate",
      "topics": ["development", "smart-contracts"]
    },
    {
      "title": "Advanced Trading Strategies",
      "description": "Master complex trading strategies and risk management",
      "url": "https://academy.example.com/advanced-trading",
      "difficulty": "advanced",
      "topics": ["trading", "risk-management", "algorithms"]
    }
  ]
}
```

## Contribute

1. Fork
2. Add your resource: `guides/your-entity.json`
3. Check validation: `npm run validate`
4. Submit a PR