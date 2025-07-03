# P2P Peers

Public peer addresses for connecting to the Hyperliquid P2P network.

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

## Best Practices

1. **Reliability**: Maintain stable, long-running nodes
2. **Connectivity**: Ensure your peers are accessible from the public internet
3. **Resources**: Allocate sufficient bandwidth and compute resources
4. **Security**: Keep your nodes updated and secure
5. **Geographic Distribution**: Consider running peers in multiple regions

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

### Multiple Peers with Ports
```json
{
  "entity": "distributed-validator",
  "addresses": [
    "45.250.255.111",
    "109.94.99.131:26656",
    "72.46.87.141"
  ]
}
```

## Node Configuration

To use these peers in your Hyperliquid node configuration:

1. Add peer addresses to your `config.toml`:
   ```toml
   persistent_peers = "node-id@ip:port,node-id@ip:port"
   ```

2. Or use the `--p2p.persistent-peers` flag when starting your node

## Contributing

1. Fork the repository
2. Create your peer file: `peers/your-entity.json`
3. Ensure it passes validation: `npm run validate`
4. Submit a pull request

Your peers will help strengthen the network's connectivity and resilience. 