# Educational Guides

Tutorials, videos, articles, and educational content about Hyperliquid.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "guides": [
    {
      "title": "Guide Title",
      "description": "What this guide teaches",
      "url": "https://your-guide-url.com",
      "type": "tutorial",
      "difficulty": "beginner",
      "topics": ["defi", "trading", "development"],
      "language": "en",
      "duration": "30 min"
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
  - **type** (optional): Guide type - `"tutorial"`, `"video"`, `"article"`, `"documentation"`, `"course"`, or `"other"`
  - **difficulty** (optional): Difficulty level - `"beginner"`, `"intermediate"`, or `"advanced"`
  - **topics** (optional): Array of topics covered
  - **language** (optional): Language code (e.g., "en", "es", "zh")
  - **duration** (optional): Estimated completion time

## Guide Types

- **Tutorial**: Step-by-step instructional content
- **Video**: Video guides and walkthroughs
- **Article**: Written articles and blog posts
- **Documentation**: Technical documentation
- **Course**: Multi-part educational series
- **Other**: Other educational content

## Examples

### Simple Guide
```json
{
  "entity": "defi-education",
  "guides": [
    {
      "title": "Getting Started with Hyperliquid",
      "description": "Complete beginner's guide to using Hyperliquid DEX",
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
      "type": "video",
      "difficulty": "beginner",
      "topics": ["trading", "defi"],
      "language": "en",
      "duration": "45 min"
    },
    {
      "title": "Building on Hyperliquid",
      "description": "Developer guide for creating smart contracts on Hyperliquid",
      "url": "https://academy.example.com/dev-guide",
      "type": "tutorial",
      "difficulty": "intermediate",
      "topics": ["development", "smart-contracts"],
      "language": "en",
      "duration": "2 hours"
    },
    {
      "title": "Advanced Trading Strategies",
      "description": "Master complex trading strategies and risk management",
      "url": "https://academy.example.com/advanced-trading",
      "type": "course",
      "difficulty": "advanced",
      "topics": ["trading", "risk-management", "algorithms"],
      "language": "en",
      "duration": "5 hours"
    }
  ]
}
```

## Best Practices

1. **Quality**: Ensure content is accurate and well-produced
2. **Updates**: Keep guides current with platform changes
3. **Accessibility**: Use clear language and good formatting
4. **Examples**: Include practical examples and exercises
5. **Support**: Provide ways for learners to ask questions

## Common Guide Topics

- Getting started with Hyperliquid
- Trading basics and strategies
- DeFi concepts and protocols
- Smart contract development
- Node operation and validation
- Security best practices
- API integration tutorials
- Market analysis techniques

## Contributing

1. Fork the repository
2. Create your guides file: `guides/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Submit a pull request

Your educational content helps grow the Hyperliquid community and ecosystem. 