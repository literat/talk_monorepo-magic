# Nx

- Advanced tool for full-stack monorepos.
- Smart task scheduling and affected-based builds.
- Plugin ecosystem for React, Angular, Node.js, etc.
- CI-friendly with computation caching and remote cache.

One package:

```bash
nx run web-app:build
```

Many packages:

```bash
nx run-many --target=build --all
```

Since:
```bash
nx affected:build --base=main --head=HEAD
```
