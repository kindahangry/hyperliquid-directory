# Hyperliquid Directory

Community-maintained index of public infrastructure for Hyperliquid. Resources are listed here: https://hyperliquid.directory

## Categories

- **[RPCs](rpcs/)** - Public RPC endpoints
- **[Peers](peers/)** - P2P node addresses  
- **[Explorers](explorers/)** - Block explorers & dashboards
- **[Meta](meta/)** - Provider info (logos, websites, socials)
- **[Analytics](analytics/)** - Dashboards (Dune, custom, etc)
- **[Tools](tools/)** - SDKs, CLIs, scripts, clients
- **[Indexers](indexers/)** - Blockchain data platforms and indexers
- **[APIs](apis/)** - Direct API endpoints and documentation
- **[Guides](guides/)** - Tutorials, videos, educational content

Each category has its own README with detailed documentation.

## How it works

1. Each provider = one JSON file per category
2. CI validates all submissions automatically
3. Everything aggregates at https://hyperliquid.directory

## Quick start

```bash
# Fork & clone
git clone https://github.com/<you>/hyperliquid-directory.git
cd hyperliquid-directory

# Example: Add your RPC endpoint
cat > rpcs/my-provider.json << EOF
{
  "entity": "my-provider",
  "endpoints": [{
    "url": "https://rpc.my-provider.com/evm",
    "description": "Fast and reliable Hyperliquid RPC"
  }]
}
EOF

# Add your entity info
cat > meta/my-provider.json << EOF
{
  "name": "My Provider",
  "website": "https://my-provider.com",
  "description": "Professional infrastructure for Hyperliquid",
  "socials": ["https://x.com/myprovider"]
}
EOF

# Test locally
npm install && npm run validate
```

See category READMEs for complete file format documentation.

## Public RPC

`https://rpc.hyperliquid.directory/evm`

Load-balanced across all community endpoints. Rate limits per IP:
- 10 req/s
- 800 req/10s

Live status: https://hyperliquid.directory/rpcs


## Contributing

Check the README in the relevant category for formats and examples
