# Component & Service Refactor TODOs

This document lists each important frontend component and service with: current responsibilities, identified problems, concrete refactor tasks, acceptance criteria, and a rough estimate.

> Note: `FishEngine` is intentionally excluded (unfinished work).
> **Last Revised:** September 26, 2025 — Updated to reflect current codebase state. ScrollObserverService extraction completed; ARCHITECTURE.md renamed to header-navigation-contract.md. Other items may need re-audit for completion status.

---

## Summary Guidance
- Aim for single-responsibility: UI components should be presentational; logic, state, and heavy algorithms belong in services or engine classes.
- Keep files < ~300 LOC when practical; break large components into container + presentational pieces.
- Preserve public behavior and public API; run `npm run build` and a visual smoke-test after each refactor.

---

## 1) `AppComponent` / `main.ts` — **NO ACTION NEEDED**
- Path: `src/app/app.component.ts`, `src/main.ts`
- Current responsibilities: bootstraps application, top-level layout host.
- Status: `app.config.ts` contains all required providers (`provideHttpClient`, `provideRouter`, `provideServiceWorker`). No issues.
- Problems: None.
- Acceptance: Met — app boots unchanged.
- Estimate: N/A (already correct).

---

## 2) `HomeMainComponent` (page container) — **NO ACTION NEEDED**
- Path: `src/app/components/home/main.component.ts`
- Responsibilities: Composes page sections (header, about, skills, portfolio, animated background).
- Status: Thin container with no logic, only composition and imports.
- Problems: None.
- Acceptance: Met — component is small and presentational.
- Estimate: N/A.

---

## 3) `HeaderComponent` (navigation) — **COMPLETED**
- Path: `src/app/components/home/header/header.component.ts`
- Current responsibilities: responsive detection, mobile menu, complex IntersectionObserver + scroll detection + active-section heuristics.
- Status: `ScrollObserverService` has been extracted and is in use. Component now injects the service and subscribes to `currentSection$`. UI and event handlers remain intact.
- Problems: Resolved — logic separated, testable service available.
- Acceptance: Met — no visual/behavioral changes, service is unit-testable.
- Estimate: Completed in prior development.

---

## 4) `AnimatedBackgroundComponent` (canvas visuals) — **PENDING**
- Path: `src/app/components/shared/animated-background/animated-background.component.ts`
- Current responsibilities: canvas init, DPR handling, particle system, physics, trails, connection logic, theme integration, performance metrics, event listeners, DOM positioning.
- Status: Large file (~840 LOC), mixes rendering engine and Angular component responsibilities. No engine extracted.
- Problems: Very large, hard to test and optimize.
- Refactor tasks (recommended staged approach):
  1. Extract `animated-background.engine.ts` (class/service): contains particle state, update loop, connection logic, trail handling, density glow, and a `step()` or `start()` API. The engine should NOT access DOM directly; it emits rendering instructions and particle arrays.
  2. Keep `AnimatedBackgroundComponent` as thin adapter: owns the `<canvas>` and translates engine state to canvas draw calls, handles resize and event wiring (mouse/touch). Component subscribes to engine frames (via `requestAnimationFrame` or engine callback).
  3. Extract performance metrics into `performance.service` if desired or keep local to engine.
- Acceptance:
  - Visuals unchanged.
  - Engine unit tests for physics (deterministic scenarios) and connection detection.
  - Component reduced in LOC (<300 LOC preferred).
- Estimate: 2–3 days (careful testing and visual parity checks).

---

## 5) `PortfolioService` & `Portfolio Components` — **PARTIALLY COMPLETE**
- Paths: `src/app/services/portfolio.service.ts`, `src/app/components/home/portfolio/*`
- Current responsibilities: fetch portfolio JSON via `DataLoadingService`, process/normalize, expose signals.
- Status: Service handles data loading well. PortfolioComponent has some logic but uses signals from service. Not fully presentational.
- Problems: Components contain data logic.
- Refactor tasks:
  - Ensure `PortfolioService` keeps all data transformation logic; portfolio components become presentational.
  - Verify `portfolio-new.component.ts` imports use `inject()` properly and do not import `HttpClientModule` inside components (use provided `provideHttpClient` in bootstrap).
- Acceptance: Components render via Input or direct signals but have minimal data processing.
- Estimate: 4–8 hours (partial progress; needs completion).

---

## 6) `PortfolioCardComponent` — **NO ACTION NEEDED**
- Path: `src/app/components/home/portfolio/portfolio-card/portfolio-card.component.ts`
- Responsibilities: render single project card including background handling and image error fallback.
- Status: Reasonable size, handles image processing and error states appropriately.
- Problems: None major.
- Tasks: N/A.
- Acceptance: Card renders correctly.
- Estimate: N/A.

---

## 7) `About` subcomponents (about, connect-collaborate, journey-timeline, profile-showcase) — **COMPLETED**
- Path: `src/app/components/home/about/*`
- Responsibilities: UI sections of About page, some timeline rendering logic.
- Status: Timeline logic extracted to `TimelineService`. Components are presentational.
- Problems: Resolved.
- Tasks: N/A.
- Acceptance: Met — smaller component files, logic in service.
- Estimate: N/A (already done).

---

## 8) `Shared` components (side-menu, theme-switcher, theme moddly component) — **COMPLETED**
- Path: `src/app/components/shared/*`
- Responsibilities: global UI (theme switching, side menu, animated background wrapper)
- Status: Theme switching logic centralized in `ThemeService`. No ad-hoc CSS handling.
- Problems: Resolved.
- Tasks: N/A.
- Acceptance: Met — theme switching consistent.
- Estimate: N/A.

---

## 9) `DataLoadingService` (big service) — **PENDING**
- Path: `src/app/services/data-loading.service.ts`
- Responsibilities: config loaders, proxy fetcher, caching, deduplication, response parsing, errors.
- Status: Single file holds many responsibilities (~671 LOC); complex fallback logic.
- Problems: Large, hard to maintain.
- Refactor tasks (gradual):
  1. Create `config-loader.ts` to manage environment/outreach config logic (simple cache, `ensureLoaded()` behavior).
  2. Create `external-fetcher.ts` to implement proxy interactions, response normalization, and parsing. Expose typed `fetchExternal(url, responseType)`.
  3. Create `cache-manager.ts` to handle the single-cache map and pending requests deduping.
  4. Recompose `DataLoadingService` as a thin orchestrator that composes those modules and keeps a stable `getData()` API.
- Acceptance:
  - `getData()` behavior unchanged.
  - Unit tests cover cache behavior, fallback from external→local, and response parsing (JSON, text, blob).
- Estimate: 3–5 days (non-trivial — requires careful tests and integration checks).

---

## 10) `ThemeService` and theme model — **PENDING**
- Path: `src/app/services/theme.service.ts`, `src/app/models/theme-definitions.ts`
- Responsibilities: theme storage, CSS variable application, cycling themes, event broadcast.
- Status: Well-structured, but no unit tests for `applyTheme` side-effects and `localStorage` interactions.
- Problems: Missing tests.
- Tasks: add unit tests and small docs for theme-definitions shape.
- Estimate: 4–8 hours (test + docs).

---

## 11) `CardParticleService`, `PerformanceService`, `ResponsiveService`, `SecurityService` — **PENDING**
- Path: `src/app/services/*`
- Responsibilities: local helper services (card particles, performance telemetry, responsive helpers, minimal security helpers).
- Status: Need audit for single responsibility and test coverage.
- Problems: Potential lack of tests or mixed responsibilities.
- Tasks: extract utilities into small modules where appropriate; add unit tests for mission-critical logic.
- Estimate: 1–2 days total for audit and small fixes.

---

## 12) Tests & CI — **PENDING**
- Add unit tests for extracted services (`scroll-observer`, `animated-background.engine`, `config-loader`, `cache-manager`) as priority.
- Add visual regression/manual smoke test steps to CI (basic `npm run build`, start server, confirm homepage loads). If a visual diff pipeline is required later, consider Storybook or Playwright snapshots.
- Status: No tests added yet.
- Estimate: varies; start with small tests (2–3 days).

---

## 13) ARCHITECTURE.md (deliverable) — **COMPLETED**
- Status: Renamed to `header-navigation-contract.md` and moved to `docs/` folder. Summarizes header/navigation subsystem contracts, APIs, and invariants.
- Acceptance: Met — new engineers can read and understand the subsystem boundaries.
- Estimate: Completed as part of documentation reorganization.

---

## Recommended Implementation Order (minimal risk → higher risk)
1. `scroll-observer.service` (**COMPLETED** — low risk, high payoff)
2. `animated-background.engine` (isolates biggest file; medium risk)
3. `config-loader` + `external-fetcher` + `cache-manager` (decompose `DataLoadingService`) (higher risk)
4. Split remaining large components into container/presentation
5. Tests + CI

---

## How to proceed (immediate next steps)
1. Pick one target to implement (I recommend `scroll-observer.service`).
2. Create a small PR with the refactor and include a GIF/screencast or quick acceptance checklist showing no regressions.
3. Run `npm run build` and smoke test the dev server.

---

## Contact & notes
- `scroll-observer.service` extraction is complete. Next recommended refactor: `animated-background.engine` to reduce the large component file.
- Many items are already in good shape; focus on the pending ones for better maintainability.
- This doc should be revised periodically as refactors are completed or new issues arise.

---

## Header + Side‑Menu: Comprehensive Refactor Plan — **COMPLETED**

Goal — **COMPLETED**

Status: `ScrollObserverService` extracted and integrated. Header component simplified, service handles intersection logic. SideMenu remains a child component with proper inputs/outputs.
- Make `HeaderComponent` small and purely presentational where possible.
- Move scroll/section detection to a testable service (`scroll-observer.service.ts`).
- Make `SideMenuComponent` a clear child of `HeaderComponent` with explicit inputs/outputs and good accessibility.
- Improve testability, reuse, and reduce surface area for bugs.

Current state (summary)
- `header.component.ts` contains responsive checks, resize observer, intersection observer logic, complex scoring heuristics, scroll fallbacks, mobile menu state, and direct DOM queries.
- `side-menu` currently coexists as a shared component used by header; relationship and responsibilities are mixed.

Desired state
- `HeaderComponent`: UI layer only — handles markup, bindings, emits navigation events, toggles menu open/close.
- `ScrollObserverService`: encapsulates intersection observer, scoring heuristics, scroll fallback, exposes `currentSection` (Signal<string> or Observable<string>), and lifecycle (`start()`, `stop()`, `observe(selectorOrElements)`).
- `SideMenuComponent`: child component of header with a minimal public API (`@Input() open`, `@Output() navigate`, `@Output() close`) and internal focus management for accessibility.

Options & tradeoffs
- Keep `SideMenu` as a sibling vs child of `Header`:
  - Child (recommended): simplifies state flow (header controls open state), easier to unit-test header behavior, and better encapsulates keyboard focus management.
  - Sibling: keeps side-menu more reusable in other contexts but requires shared state (service) or higher-level store.
- `ScrollObserverService` API choices:
  - Signals (`Signal<string>`): lightweight and fits existing code; simple to read in templates.
  - Observables (`Observable<string>`): better for RxJS composition and cancellation; preferred if you plan to use operators.
  - I'll implement both by exposing an Observable and making a tiny wrapper Signal for convenience.

Step-by-step migration (safe, reversible)
1. **Add `scroll-observer.service.ts` (non-breaking)**
  - Create under `src/app/services/scroll-observer.service.ts`.
  - Move the intersection observer setup and scoring logic into the service as private methods.
  - Expose:
    - `currentSection$ : Observable<string>`
    - `currentSectionSignal: Signal<string>` (optional wrapper)
    - `start(root?: Element | Document, selector?: string)`
    - `stop()`
    - `observeElements(elements: Element[])`
  - Keep the implementation identical to current heuristics initially; write unit tests for the scoring algorithm with synthetic entries.

2. **Introduce `HeaderFacade` (optional short adapter)**
  - A small adapter within header to convert signals/observables to the component change detection context (if needed).

3. **Consume service from `HeaderComponent` (non-breaking)**
  - Inject the `ScrollObserverService` into `HeaderComponent`.
  - On `ngOnInit()` call `scrollObserver.start()` and `observeElements(...)` using the same selector the component currently uses.
  - Replace internal intersection/scroll logic with subscriptions to `currentSection$` or the `currentSectionSignal`.
  - Keep all UI event handlers (toggle menu, navigate) intact. Add calls to `scrollObserver.stop()` on `ngOnDestroy()`.

4. **Refactor `SideMenuComponent` to be a header child**
  - Update `side-menu.component.ts` API:
    - `@Input() open = false;`
    - `@Output() openChange = new EventEmitter<boolean>();`
    - `@Output() navigate = new EventEmitter<string>();`
    - `@Output() requestClose = new EventEmitter<void>();`
  - Ensure `SideMenuComponent` manages focus when opened (focus first interactive element) and traps focus while open.
  - Ensure keyboard behavior: Escape closes menu, Arrow keys navigate entries, Enter activates.
  - Move any `cv-download` and download link logic inside the side menu as internal concerns; expose events for tracking.

5. **Wire `HeaderComponent` -> `SideMenuComponent`**
  - Header maintains `isMobileMenuOpen` signal and binds `[open]="isMobileMenuOpen()"` and `(openChange)` to update the signal.
  - `HeaderComponent` listens to `navigate` events from the side menu and calls `onNavigate(sectionId)` (existing method) and closes the menu.
  - Keep `closeMobileMenu()` in header but delegate focus restoration (return focus to menu button) to the menu component via an event.

6. **Progressive rollout strategy**
  - Implement the service and header changes in a feature branch.
  - Keep the old logic available (commented or behind a small feature flag) for quick rollback in case of regressions.
  - Add smoke tests (manual or automated) that validate:
    - Scrolling between sections updates active nav item.
    - Clicking nav item scrolls and updates active state.
    - Mobile menu opens, traps focus, and closes on navigation or Escape.

Acceptance criteria (done when all are true)
  - `HeaderComponent` no longer contains intersection observer initialization or scoring code — that code lives in `ScrollObserverService`.
  - `SideMenuComponent` exposes the inputs/outputs listed and handles focus management + keyboard navigation.
  - Visual behavior unchanged: active nav items update as before during scroll and after navigation, mobile menu works and closes on navigation.
  - Unit tests exist for the scoring algorithm and for the `ScrollObserverService` start/stop/observe lifecycle.
  - Build (`npm run build`) completes successfully; visual smoke test passes.

Testing strategy
  - Unit tests:
    - Scoring algorithm: simulate IntersectionObserverEntry shapes and assert winner selection.
    - ScrollObserver lifecycle: simulate element lists, start/stop, and ensure `currentSection$` emits expected values.
  - Integration tests (manual or automated):
    - Scroll across sections to assert active nav changes.
    - Open side menu, keyboard navigation, click a nav item and assert menu closes.
    - Mobile viewport test for responsive behavior.

Rollout & monitoring
  - Merge to a feature branch and deploy to a staging preview.
  - Ask a quick visual QA (screenshot/GIF) from the team for approval.
  - Once approved, merge to main and monitor errors and user reports for a day.

Estimates
  - `ScrollObserverService` extraction + unit tests: 2–4 hours.
  - `SideMenu` refactor into header child with accessibility improvements: 4–8 hours.
  - Integration, smoke tests, and rollout: 2–4 hours.

Notes
  - Keep the scoring heuristics exactly the same initially; after migration we can tune for performance and simplicity.
  - If we want reuse of `SideMenu` outside `Header` later, extract a small `SideMenuFacade` or provide a shared `MenuStateService`.

---

End of Header + Side‑Menu Refactor Plan

---

## New Component: MetaComponent (Introspective Page)
- Path: `src/app/components/meta/meta.component.ts` (to be created)
- Responsibilities: Display runtime introspection of app configs (environment.json, outreach config via DataLoadingService) on `/meta` route for meta-portfolio self-documentation.
- Problems: None yet (new component); ensure it doesn't expose sensitive data.
- Tasks:
  1. Create standalone Angular component with template to display configs in a readable format (e.g., JSON viewer).
  2. Inject `DataLoadingService` to fetch outreach config.
  3. Load `environment.json` via HttpClient or direct import.
  4. Add route in `app.routes.ts` for `/meta`.
  5. Style minimally for readability.
- Acceptance: Visit `/meta` in browser to inspect configs; component loads without errors; configs are displayed accurately.
- Estimate: 1–2 hours (creation + routing + basic styling).

---


