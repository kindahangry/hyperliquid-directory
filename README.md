# Hyperliquid Directory

A community‑maintained index of public endpoints, peers, dashboards and other resources that power the Hyperliquid ecosystem.

## What's here

- **RPCs** - Public RPC endpoints
- **Peers** - P2P seed addresses  
- **Explorers** - Block explorers & dashboards
- **Meta** - Provider info (logos, websites, socials)
- **Analytics** - Any dashboards - Dune, custom, etc 
- **Tools** - Scripts, SDKs, clients, other tools

## How it works

1. Each provider = one JSON file per category
2. CI validates submissions
3. Everything gets aggregated at https://hyperliquid.directory

## Quick start

```bash
# Fork, clone, add your stuff
git clone https://github.com/<you>/hyperliquid-directory.git
cd hyperliquid-directory

# Add your resource, e.g.
echo '{
  "entity": "your-name",
  "endpoints": [{
    "url": "https://your-rpc.com",
    "description": "Your RPC description"
  }]
}' > rpcs/your-name.json

# Test locally
npm install && npm run validate

# Push & PR
git add . && git commit -m "add your-name RPC" && git push
```

## File formats

### RPC (`rpcs/your-name.json`)
```json
{
  "entity": "your-name",
  "endpoints": [{
    "url": "https://...",
    "description": "...",
    "rateLimits": {}
  }]
}
```

### Peers (`peers/your-name.json`)
```json
{
  "entity": "your-name", 
  "addresses": ["1.2.3.4", "5.6.7.8"]
}
```

### Explorer (`explorers/your-name.json`)
```json
{
  "entity": "your-name",
  "description": "Your explorer",
  "website": "https://..."
}
```

### Meta (`meta/your-name.json`) - optional
```json
{
  "name": "Your Name",
  "website": "https://...",
  "description": "What you do",
  "logoUrl": "https://...",
  "socials": ["https://x.com/..."]
}
```

### Analytics (`analytics/your-name.json`)
```json
{
  "entity": "your-name",
  "dashboards": [{
    "name": "Dashboard Name",
    "url": "https://...",
    "description": "What it shows",
    "type": "dune"  // or "custom", "other"
  }]
}
```

### Tools (`tools/your-name.json`)
```json
{
  "entity": "your-name",
  "tools": [{
    "name": "Tool Name",
    "description": "What it does",
    "url": "https://github.com/...",
    "type": "sdk",  // or "cli", "script", "client", "other"
    "language": "Python"
  }]
}
```

## Public RPC

`https://rpc.hyperliquid.directory/evm`

Geo-distributed and load-balanced across all community endpoints. Respects provider-level rate limits as configured here. Is a L7 proxy, so for optimal reliability, providers will ideally rely on `X-Forwarded-For` headers for requests sourced from our loadbalancers. Please [reach out](https://t.me/murakamikaze) for support on this!   

Live status: https://hyperliquid.directory/rpcs

## Rules

- One provider = one JSON file per category
- Entity names must match across files (e.g., `validao` everywhere)
- CI blocks merge if validation fails

## Contributing
Feel free to add categories if you have a resource that doesn't fit into any of the existing ones.
