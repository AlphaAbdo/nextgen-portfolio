# Next Generation Portfolio — Monorepo

This repository contains a master's portfolio: an Angular 20 frontend and a lightweight Express backend used for proxying external resources. The project is organized as a monorepo using npm workspaces and Lerna.

Purpose: a modern, demonstrable portfolio with PWA support, custom data-loading, and a small backend for fetching external assets (used for demos and developer convenience).

---

## Quick Facts
- Frontend: Angular 20, TypeScript
- Backend: Express.js proxy server (Node 16+)
- Monorepo: Lerna + npm workspaces
- PWA: Angular Service Worker (`packages/frontend/ngsw-config.json`)

---

## Quick Start (developer)
Prerequisites: Node.js 16+, npm, Docker (optional).

1. Install and bootstrap workspace:

```powershell
npm install
npx lerna bootstrap
```

2. Run both services (dev):

```powershell
npm run dev
```

3. Run only frontend or backend:

```powershell
npm run frontend   # Angular dev server on http://localhost:4201
npm run backend    # Express proxy on http://localhost:3001
```

4. Production build (frontend):

```powershell
cd packages/frontend
npm run build:prod
```

Docker (dev):

```powershell
docker-compose up --build
```

---

## Project Structure (high level)
- `packages/frontend` — Angular application and app-specific docs
- `packages/backend` — Express proxy server and related scripts
- `docker-compose.yml`, `Dockerfile*` — container definitions for dev/production

See `packages/frontend/docs/header-navigation-contract.md` for subsystem contracts (Header & Navigation) and `packages/frontend/docs/NAMING_CONVENTION_HEADER.md` for naming rules used across the header/about subsystems.

---

## Notable Implementation Details
- `DataLoadingService` (`packages/frontend/src/app/services/data-loading.service.ts`) implements:
  - single in-memory cache, request deduplication, fallback from external sources to local assets, and config-driven external overrides.
- Backend proxy (`packages/backend/proxy-server.js`) supports both generic fetching (`POST /api/fetch`) and a path-based proxy (`GET /proxy/:url(*)`). It includes Google Drive heuristics to handle different sharing URL formats.
- PWA configuration in `packages/frontend/ngsw-config.json` (service worker) — review and adjust caching rules for large media if using PWA in production.

---

## Security & Deployment Notes (important)
- The backend exposes a proxying endpoint intended for development and controlled demos. If you deploy this publicly, add host whitelisting, rate limiting (e.g., `express-rate-limit`), and authentication.
- Review `ngsw-config.json` before publishing: avoid prefetching very large media files to prevent excessive bandwidth and stale content.

---

## How I Built This (short)
- Designed a single-page Angular application with component-driven architecture and a `ScrollObserverService` as the single source of truth for navigation.
- Implemented a robust `DataLoadingService` supporting external configuration overrides (useful to point to external JSON for content updates without redeploying frontend).
- Added a small Node/Express proxy to simplify cross-origin fetching of external assets during development and demos.

---

## Documentation & Next Steps
- Architecture contract: `packages/frontend/docs/header-navigation-contract.md`
- Naming convention: `packages/frontend/docs/NAMING_CONVENTION_HEADER.md`
- Component refactor notes: `packages/frontend/docs/component-refactor-todos.md`
- Accessibility review: `portfolio-review.md`

If you'd like, I can: (A) prepare a small PR that hardens the proxy and updates `ngsw-config.json`, or (B) create a one-page deployment checklist for production readiness.

---

License: MIT
# Next Generation Portfolio - Monorepo

A fully modernized portfolio application built with Angular 20 frontend and Express.js ba### Docker Development with File Watching

```bash
docker-compose up --watch
```
- Uses Docker Compose watch for automatic file sync and rebuilds
- Automatically updates services when you save files
- No manual container restarts needed
- **Requires Docker Compose v2.22+**

### File Watching Details

**Frontend (Angular):**
- **Sync actions:** `src/`, `public/`, `angular.json`, `tsconfig.*`
- **Rebuild actions:** `package.json` changes
- Files are automatically synced to containers on save

**Backend (Node.js):**
- **Sync actions:** All backend files (except `node_modules/`)
- **Rebuild actions:** `package.json` changes
- Automatic sync and rebuild on file changes

### File Watching Details

**Frontend (Angular):**
- Watches: `src/`, `public/`, `angular.json`, `tsconfig.*`
- Hot reload enabled by default
- No restart needed for most changes

**Backend (Node.js):**
- Uses `nodemon` for file watching
- Watches: All `.js` files (except test files)
- Auto-restarts server on changes
- Configured in `packages/backend/nodemon.json` a monorepo using Lerna for better development workflow and package management.

## 🚀 Features

- **Angular 20** frontend with Standalone Components and Signals
- **Express.js** backend with proxy server for external resources
- **Monorepo** structure with Lerna for package management
- **Progressive Web App (PWA)** capabilities
- **TypeScript 5.7.2** with strict mode
- **Modern CSS** with Grid, Flexbox, and Container Queries
- **Responsive Design** with mobile-first approach
- **Performance Optimized** with lazy loading and modern APIs
- **Accessible** with ARIA support and keyboard navigation

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn
- Angular CLI 19+

### Installation

```bash
# Install root dependencies (includes Lerna)
npm install

# Bootstrap all packages - Lerna automatically installs dependencies for all workspaces
npx lerna bootstrap
```

### Starting Development Servers

#### Quick Start Options

**Windows:**
```cmd
# Interactive menu (recommended)
dev.bat

# Or direct commands:
npm run dev          # Both services (blocks terminal)
npm run frontend     # Frontend only
npm run backend      # Backend only
```

**Linux/Mac:**
```bash
# Interactive menu (recommended)
./dev.sh

# Or direct commands:
npm run dev          # Both services (blocks terminal)
npm run frontend     # Frontend only
npm run backend      # Backend only
```

#### Manual Control

If you prefer to manage terminals yourself:

```bash
# Terminal 1 - Frontend
npm run frontend

# Terminal 2 - Backend
npm run backend
```

#### What Each Option Does

- **`npm run dev`**: Starts both frontend and backend in parallel (blocks terminal)
- **`npm run frontend`**: Starts only Angular dev server on port 4201
- **`npm run backend`**: Starts only Express proxy server on port 3001
- **`dev.bat` / `dev.sh`**: Interactive menu with options including separate terminals

Once running:
- Frontend: `http://localhost:4201/`
- Backend: `http://localhost:3001/` (Proxy server) (Proxy server)

### Starting Development Servers

```bash
# Start both frontend and backend in parallel
npm run dev

# Or start individually:
# Frontend (Angular)
cd packages/frontend
npm run dev

# Backend (Express)
cd packages/backend
npm start
```

Once running:
- Frontend: `http://localhost:4201/`
- Backend: `http://localhost:3001/`

**To stop services**: Press `Ctrl+C` in the terminal(s) where they're running.

### Available Commands

```bash
# Development
npm run dev              # Start both services (parallel, blocks terminal)
npm run dev:watch        # Start both with concurrently (better process management)
npm run frontend         # Start frontend only (Angular dev server)
npm run backend          # Start backend only (Express proxy server)

# Docker Development
docker-compose up --build    # Traditional volume mounts (recommended)
docker-compose up --watch    # Docker file watching (experimental)

# Production
npm run start           # Start both services in production mode

# Testing & Building
npm run build           # Build all packages
npm test               # Test all packages
npm run test:watch      # Run tests in watch mode

# Code Quality
npm run lint           # Lint all packages
npm run format         # Format code across packages

# Maintenance
npm run clean          # Clean all node_modules and dist folders
npm run bootstrap      # Bootstrap Lerna workspace
npm run health         # Check if both services are healthy
```

### Docker Development Features

- **Hot Reload**: Angular frontend automatically refreshes on file changes
- **Auto-Restart**: Backend server restarts automatically with nodemon
- **Volume Mounting**: Source files are watched from your host machine
- **Live Development**: Make changes locally, see them instantly in Docker

### File Watching Details

**Frontend (Angular):**
- Watches: `src/`, `public/`, `angular.json`, `tsconfig.*`
- Hot reload enabled by default
- No restart needed - changes appear instantly

**Backend (Node.js):**
- Uses `nodemon` for file watching
- Watches: All `.js` files (except tests)
- Auto-restarts server on changes
- Configured in `packages/backend/nodemon.json`

### Environment Configuration

1. Copy `.env.example` to `.env`
2. Adjust settings for your environment
3. The services will automatically use these configurations

### Code Quality

- **ESLint**: Configured for consistent code style
- **Prettier**: Code formatting (add to your IDE)
- **TypeScript**: Strict mode enabled for Angular

### Health Checks

- Backend: `GET /health` returns service status
- Frontend: Angular dev server health check
- Use `npm run health` to verify both services are running

### Proxy Integration

The Angular application uses the Express backend for proxying external requests. The `DataLoadingService` automatically routes external URLs through the backend proxy:

- Backend proxy endpoint: `http://localhost:3001/proxy?url=EXTERNAL_URL`
- External URLs (Google Drive, etc.) are automatically proxied
- Local assets remain served directly by Angular for performance

### Testing Proxy Integration

```bash
cd packages/backend
npm test
```

Or test the proxy directly:
```bash
curl "http://localhost:3001/proxy?url=https://httpbin.org/json"
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## 🏗️ Building

```bash
# Build all packages
npm run build

# Or build individually:
npx lerna run build --scope=@nextgen-portfolio/frontend  # Angular build
# Backend has no build step
```

For PWA production build:
```bash
cd packages/frontend
ng build --configuration production
```

## 🧪 Running Tests

```bash
# Test all packages
npm test

# Or test individually:
npx lerna run test --scope=@nextgen-portfolio/frontend  # Angular tests
npx lerna run test --scope=@nextgen-portfolio/backend  # Backend tests
```

## 🔧 Tech Stack

- **Frontend**: Angular 20, TypeScript 5.7.2
- **Backend**: Express.js, Node.js 16+
- **Monorepo**: Lerna
- **Styling**: SCSS, Modern CSS (Grid, Flexbox, Container Queries)
- **PWA**: Angular Service Worker
- **Icons**: FontAwesome 7.0.1
- **Build**: Angular CLI 19.1.8

## 📁 Project Structure

```
packages/
├── frontend/                    # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── header/      # Navigation component
│   │   │   │   ├── about/       # About section
│   │   │   │   ├── skills/      # Skills showcase
│   │   │   │   ├── portfolio/   # Project gallery
│   │   │   │   └── contact/     # Contact form
│   │   │   ├── services/        # Angular services
│   │   │   ├── models/          # TypeScript interfaces
│   │   │   ├── app.component.*  # Root component
│   │   │   └── app.config.ts    # App configuration
│   │   ├── assets/              # Images, fonts, CSS, data
│   │   └── styles.scss         # Global styles
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
└── backend/                     # Express server
    ├── abstract_sv.js          # Main proxy server
    ├── proxy-server.js        # Express app
    ├── proxy.conf.json         # Proxy configuration
    ├── test-*.js               # Test scripts
    ├── package.json
    └── start.sh                # Startup script
```

## 🌟 Enhanced Features

### Process Management
- **Concurrently**: Better parallel process management with `npm run dev:watch`
- **Individual Services**: Run frontend/backend independently
- **Interactive Scripts**: `dev.bat` / `dev.sh` for easy service management

### Code Quality
- **ESLint**: Consistent linting across packages
- **TypeScript**: Strict mode for better code quality
- **Shared Configurations**: Maintainable code standards

### Containerization
- **Docker Support**: Full containerization with multi-stage builds
- **Docker Compose**: Easy development environment setup
- **Production Ready**: Optimized production images

### Monitoring & Health
- **Health Checks**: Built-in service health monitoring
- **Error Handling**: Improved error responses and logging
- **Environment Config**: Flexible configuration management

### Development Experience
- **Hot Reload**: Fast development with Angular's hot reload
- **Watch Mode**: Continuous testing and building
- **Cross-Platform**: Works on Windows, Linux, and macOS

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
