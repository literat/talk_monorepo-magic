# Lerna

- One of the first tools to manage JS monorepos.
- Supports independent and fixed versioning.
- Uses Yarn/npm workspaces under the hood (in modern versions).
- Taken ownership by Narwal and slowly integrating with Nx.

## Lerna Commands

- `lerna init`: Initializes a new Lerna monorepo.
- `lerna create <package-name>`: Creates a new package.
- `lerna add <package-name>`: Adds a dependency to a package.
- `lerna publish`: Publishes packages to npm.
- `lerna run <script>`: Runs a script in all packages.
- `lerna bootstrap`: Links local packages together and installs their dependencies.
- `lerna changed`: Lists packages that have changed since the last release.
- `lerna diff`: Shows the differences between the current state and the last release.
- `lerna exec <command>`: Executes a command in each package.
- `lerna clean`: Removes the `node_modules` directories from all packages.
- `lerna list`: Lists all packages in the monorepo.
- `lerna version`: Bumps the version of packages and creates a new release.
- `lerna import <path>`: Imports an existing package into the monorepo.
- `lerna link`: Links local packages together without installing dependencies.
- `lerna run <script> --stream`: Runs a script in all packages and streams the output.
- `lerna run <script> --parallel`: Runs a script in all packages in parallel.
- `lerna run <script> --scope <package>`: Runs a script in a specific package.

```bash
# Run build in all packages changed since last commit
lerna changed
lerna run build --since HEAD~1 
```
