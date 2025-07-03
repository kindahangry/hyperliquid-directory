# P2P Peers

Public seeds for connecting to the Hyperliquid P2P network.

## File Format

Each provider should create one JSON file named `<entity-name>.json` with the following structure:

```json
{
  "entity": "your-entity-name",
  "addresses": [
    "1.2.3.4",
    "5.6.7.8:26656"
  ]
}
```

## Field Descriptions

- **entity** (required): Your entity identifier, must match the filename
- **addresses** (required): Array of peer addresses
  - Can be IP addresses with or without port (default port: 26656)
  - IPv4 format: `1.2.3.4` or `1.2.3.4:26656`

## Examples

### Single Peer
```json
{
  "entity": "simple-validator",
  "addresses": [
    "192.168.1.100"
  ]
}
```
