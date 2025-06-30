# Monorepo Magic

> A talk about monorepos, their benefits, and how to manage them effectively.

![](./slides/010-magic.gif)

## Slides

---

### What is a monorepo?

- monorepo (short for monolithic repository)
- single version-controlled code repository that holds multiple projects,
  which can be related or even independent tools, services, and packages
- everything lives together in one place

X

- polyrepos
- each project lives in its own separate repository

---

### Why use a monorepo?

- Shared code is easier to manage and reuse (e.g., design systems, utilities).
- Consistent tooling and dependencies.
- Unified versioning and easier refactoring.
- Atomic commits across projects.
- Simplified CI/CD pipelines.

### Why do not use a monorepo?

- Large teams working on multiple related packages.
- Design systems and shared UI libraries.
- Fullstack applications with shared types/interfaces.
- Microservices that are developed together.

---

### Pros

✅ Easier code sharing and refactoring
✅ Simplified dependency management
✅ Easier cross-project testing and integration
✅ Unified CI/CD workflows

### Cons

⚠️ Potential performance issues with large repositories
⚠️ Tooling complexity (requires build tools, cache, filtering)
⚠️ Harder Git history navigation
⚠️ Might not scale well without automation and discipline

---

### Brief History

- Early 2010s: JS community leaned heavily toward polyrepos.
  Tooling wasn’t mature for monorepos.
- **Lerna** (2015): First major tool to simplify managing multiple packages.
  Popularized the monorepo approach.
- **Yarn Workspaces** (2017): Native support for package linking and hoisting.
- **Nx (by Nrwl)**: Added powerful task orchestration, affected project detection, and caching.
- **Turborepo** (2021): Developed by Vercel to support blazing-fast monorepos with remote caching and pipeline support.
