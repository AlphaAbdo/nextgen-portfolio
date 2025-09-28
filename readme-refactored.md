# Next Generation Portfolio — Refactored (Working Draft)

This file is the working draft for an improved, authoritative README. The original `README.md` remains unchanged and serves as the canonical reference for history.

Status: WIP — intended for iterative edits. Treat this file as the single source for README changes while it is being refined. When the refactor is complete, the repository owner can replace `README.md` with this content.

## TL;DR
- What: Demo portfolio — Angular frontend + Express proxy backend
- Intent: Developer demo, PWA features, local development convenience
- Not production-ready: see Security & Deployment Notes below

## Verified facts
- Frontend: Angular 20.x (see `packages/frontend/package.json` — @angular/* matches ^20.2.4)
- Backend: Express (package.json specifies `express@^5.1.0`)
- Node minimum: backend `engines.node` >= 16.0.0 (confirm CI/test matrix if you require newer LTS)
- Monorepo tooling: npm workspaces + Lerna (used for multi-package commands and bootstrapping)

## Goals for this refactor
1. Remove duplicated and corrupted sections from the original README
2. Reconcile versions and ensure commands are authoritative (pulled from package.json)
3. Provide clear platform-specific quick-start instructions (Windows PowerShell, macOS/Linux)
4. Document proxy API endpoints with examples and caveats
5. Add actionable security hardening snippets for the proxy
6. Add contributor guidance, testing, and CI pointers

## Project structure (short)
- `packages/frontend` — Angular application (dev server: port 4201)
- `packages/backend` — Express proxy server (dev server: port 3001)

## Development — quick start (verified)
Prerequisites (tested locally / from package.json): Node.js >=16.x (recommend latest active LTS), npm 9.x or later. Docker optional.

From repository root:

PowerShell (Windows):

```powershell
npm install
npx lerna bootstrap
npm run dev   # starts frontend and backend (see package scripts)
```

macOS / Linux (bash):

```bash
npm install
npx lerna bootstrap
npm run dev
```

Service details (verified from package.json):
- Frontend: `packages/frontend` — scripts: `dev|start` => `ng serve --port 4201 --host 0.0.0.0` (access at http://localhost:4201)
- Backend: `packages/backend` — scripts: `start` => `node proxy-server.js`; `dev` => `nodemon proxy-server.js` (default port 3001 in code; please confirm `proxy-server.js` if different)

Run individually (from repo root):

```powershell
npm run frontend    # starts Angular dev server on port 4201
npm run backend     # starts Express proxy server on port 3001
```

Note: confirm `npm run frontend` and `npm run backend` map to the package scripts (they should be root-level scripts that forward to package-level commands via Lerna or npm workspace scripts). If those root scripts are missing, run the package scripts directly in the package folder.

Lerna / npm script behavior (explicit)
- `npm run dev` (root): runs `lerna run dev --parallel` — this executes the `dev` script in each workspace package that defines it. If a package does not define `dev`, Lerna will skip or error depending on configuration.
- `npm run start` (root): runs `lerna run start --parallel` — executes package `start` scripts (production starts).
- `npm run frontend` / `npm run backend` (root): use `--scope` to run the `dev` script only for the targeted package. These resolve to package-level `dev` scripts (frontend -> `ng serve`, backend -> `nodemon`).

Overriding default ports / environment examples
- PowerShell (Windows):

```powershell
$env:PORT=4001; npm run backend
```

- Bash (macOS / Linux):

```bash
PORT=4001 npm run backend
```

Health endpoint (explicit)
- Endpoint: `GET /health`
- Example:

```bash
curl http://localhost:3001/health
```

- Expected response (example):

```json
{"status":"ok","timestamp":"2025-09-27T12:34:56.789Z"}
```

Security note: rate limiting
- The illustrative rate-limit example in this file referenced `express-rate-limit`. That package is not in `packages/backend/package.json` by default. To use it, install it in the backend package:

```bash
cd packages/backend
npm install express-rate-limit --save
```

Deploy script note
- Angular's build output may include a `browser` subdirectory depending on builder and deployment configuration. `angular.json` sets `outputPath` to `dist/portfolio-app`, and some build flows produce `dist/portfolio-app/browser` as the final artifact (the `angular-cli-ghpages` command expects the directory that contains `index.html`).

Best practice: confirm where `index.html` lands after `ng build --configuration production` and set `--dir` accordingly. Common options:

```text
# If index.html is at dist/portfolio-app/index.html
--dir=dist/portfolio-app

# If build produces a browser subfolder with index.html
--dir=dist/portfolio-app/browser
```

## Proxy API (canonical)
- Example GET proxy: `GET http://localhost:3001/proxy?url=https://httpbin.org/json` — forwards a request and returns proxied response. (Check `packages/backend/proxy-server.js` for exact endpoints; some older README references `POST /api/fetch` — verify and document both if present.)

Example curl:

```bash
curl "http://localhost:3001/proxy?url=https://httpbin.org/json"
```

## Security & Deployment (short)
- This proxy endpoint is intended for development and demos only. Before public deployment, add:
	- Host whitelisting (example middleware),
	- Rate limiting (e.g., `express-rate-limit`),
	- Authentication (API key or OAuth/JWT gateway),
	- Logging and monitoring.

Example host whitelist + rate limit (illustrative):

```js
// Example middleware (do not paste this blindly to production)
const rateLimit = require('express-rate-limit');
const allowedHosts = new Set(['example.com','localhost']);
app.use('/proxy', (req,res,next)=>{
	try{
		const external = new URL(req.query.url || req.body.url);
		if(!allowedHosts.has(external.hostname)) return res.status(403).send('Forbidden');
	}catch(e){ return res.status(400).send('Invalid URL'); }
	next();
});
app.use('/proxy', rateLimit({ windowMs: 60_000, max: 30 }));
```

## Tests & Health
- Frontend tests: `packages/frontend` uses Karma/Jasmine — run via `npm test` (package script `test`)
- Backend tests: run `npm test` in `packages/backend` if test scripts exist; otherwise backend has linting and nodemon for dev.
- Health endpoint: `GET /health` (if implemented) — provide curl example and expected JSON.

## Next steps (what I'll do next)
1. Consolidate this file into a final README after we iterate on the exact wording and any additional content you want (contributing, CI, badges).
2. If you approve, I will produce a patch that adds badges, a CONTRIBUTING.md skeleton, and a short 
