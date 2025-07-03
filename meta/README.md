# Provider Metadata

Additional information about infrastructure providers including logos, websites, and social links.

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

## Logo Guidelines

If providing a logo:
- **Format**: PNG, SVG, or JPG
- **Size**: ≤2MB, ideally ≤512×512px
- **Background**: Transparent preferred for PNG/SVG
- **Naming**: Match your entity name (e.g., `logo/your-entity.png`)

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

## Best Practices

1. **Consistency**: Use the same entity name across all categories
2. **Professionalism**: Provide accurate, up-to-date information
3. **Accessibility**: Ensure logos work on light and dark backgrounds
4. **Contact**: Include at least one way for users to reach you
5. **Updates**: Keep your information current

## Contributing

1. Fork the repository
2. Create your meta file: `meta/your-entity.json`
3. (Optional) Add your logo: `logo/your-entity.png`
4. Ensure it passes validation: `npm run validate`
5. Submit a pull request

Your metadata enhances your presence across the Hyperliquid Directory.