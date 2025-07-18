# Workspaces

- https://yarnpkg.com/features/workspaces
- https://pnpm.io/workspaces
- https://docs.npmjs.com/cli/v9/using-npm/workspaces

- Enables package linking (local dependencies) and hoisting.
- Integrated into package managers (Yarn, pnpm, npm 7+).
- Great for lightweight monorepos.

Example: package.json with Yarn Workspaces

```json
{
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

Folder structure:

```
my-monorepo/
├── package.json
├── packages/
│   ├── web-app/
│   │   └── package.json
│   └── shared-lib/
│       └── package.json
```

Linking local dependencies In web-app/package.json:

```json
{
  "name": "web-app",
  "dependencies": {
    "shared-lib": "workspace:*"
  }
}
```

Focus install

```bash
yarn workspaces focus @my-org/app
```

Running scripts across workspaces:

```bash
# Using workspaces (Yarn)
yarn workspace web-app run build

# Using workspaces (npm)
npm run build --workspace=web-app
```

Running scripts across all workspaces:
```bash
yarn workspaces foreach --all run build
```

Running since:

```bash
yarn workspaces foreach --since=main --verbose run build
```
