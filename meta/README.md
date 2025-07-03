# Provider Metadata

 Information about resource providers including logos, websites, social links.

## File Format

Create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "name": "Your Provider Name",
  "website": "https://your-website.com",
  "description": "What your organization does",
  "logoUrl": "https://your-logo-url.com/logo.png",
  "socials": [
    "https://x.com/yourhandle",
    "https://t.me/yourchannel"
  ]
}
```

## Field Descriptions

- **name** (required): Your organization's display name
- **website** (optional): Your main website URL
- **description** (optional): Brief description of your organization
- **logoUrl** (optional): URL to your logo image
  - Alternatively, place logo file in `/logo/<entity-name>.png`
- **socials** (optional): Array of social media profile URLs

## Examples

### Minimal Metadata
```json
{
  "name": "Simple Provider"
}
```

### Complete Metadata
```json
{
  "name": "Professional Infrastructure Co",
  "website": "https://pro-infra.com",
  "description": "Enterprise-grade blockchain infrastructure for Hyperliquid ecosystem",
  "logoUrl": "https://pro-infra.com/assets/logo.png",
  "socials": [
    "https://x.com/proinfra",
    "https://github.com/proinfra",
    "https://t.me/proinfra_support"
  ]
}
```

## Contributing

1. Add your resource: `apis/your-entity.json`
2. Run `npm run validate`
3. Submit PR
