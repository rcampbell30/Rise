# Rise

Source-first repository for the Rise storefront.

## Local setup

1. Install Node.js 20+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app locally:
   ```bash
   npm run dev
   ```

## Contributor quality gates

Run these checks before opening a PR:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Build and release process

- `main` remains source-only (no generated bundle committed).
- CI runs lint, typecheck, tests, and build.
- CI uploads `dist/` as a build artifact for deployment workflows.
- Deployments should consume the CI artifact or run `npm run build` during deployment.
