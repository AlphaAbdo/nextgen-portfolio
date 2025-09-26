# Header & Navigation Contract

Purpose & Scope
- This document is a contract describing the public APIs, ownership, and invariants for the header/navigation subsystem. It defines what must not be broken by future changes and how components/services must interact. Scope: `Header`, `SideMenu`, `CvDownload` (menu-related behavior), and `ScrollObserverService`.

Contract Summary (high level)
- **Ownership**: `Header` owns navigation state (active section, mobile menu open state) and the primary interaction channel for the menu.
- **Single Source of Truth**: `ScrollObserverService` is the authoritative source for active-section detection.
- **No Global DOM Coupling**: Components must not use global custom events or document/querySelector to wire interactions between unrelated components.

Public APIs and Types (do not change signatures silently)
- **ScrollObserverService** (file: `src/app/services/scroll-observer.service.ts`)
  - `currentSection$: Observable<string | null>`  emits the canonical active section id, debounced.
  - `start(root?: Element): void`  begin observing sections within `root` (default: `document`).
  - `stop(): void`  stop observation and release observers.
  - `setActiveSection(sectionId: string | null): void`  programmatically set the current section (keeps service state consistent).
  - `detectNow(): void`  force a detection pass (used after programmatic scrolls).

- **HeaderComponent** (file: `src/app/components/home/header/header.component.ts`)
  - Exposes `menuInteraction$: Subject<void>` (or Observable) and passes it to child menu-related components.
  - Owns `activeSection: string | null` and `isMobileMenuOpen: boolean` state.
  - When performing programmatic navigation, it MUST call `ScrollObserverService.setActiveSection(...)` and `detectNow()`.

- **SideMenuComponent** (file: `src/app/components/home/header/side-menu/side-menu.component.ts`)
  - Inputs: `isMobile: boolean`, `isOpen: boolean`, `activeSection: string | null`, `menuInteraction$?: Observable<void>`
  - Outputs: `onNavigate: EventEmitter<string>`, `onClose: EventEmitter<void>`
  - Side effects: Should not query the document for unrelated DOM nodes or emit global events to reach other components.

- **CvDownloadComponent** (menu child)
  - Accepts `menuInteraction$?: Observable<void>` and reacts to it. It must NOT rely on scanning the global DOM for `app-side-menu`.

Invariants & Do-Not-Breach Rules
- Header is the only component allowed to toggle `document.body` classes related to the menu (current: `menu-open`) to lock scrolling.
- The `menuInteraction$` channel MUST be created and owned by `Header` and passed down; other components should subscribe but not call `next()` on it (unless explicitly documented).
- `ScrollObserverService` MUST remain the canonical source for active-section detection. Do not implement another competing algorithm in `Header` or `SideMenu` that overrides the service's output.
- Programmatic navigation MUST never leave URL fragments behind. Use fragmentless navigation flow: smooth-scroll 1 history.replaceState(...) 1 ScrollObserverService.setActiveSection(...).
- No component should rely on a specific global element id or brittle querySelector paths that can be refactored; prefer Inputs/Outputs or service APIs.

Accessibility Contract
- Burger button:
  - MUST expose `aria-expanded` reflecting `isMobileMenuOpen` and `aria-controls` pointing at the `SideMenu` id.
  - MUST have a clear `aria-label` that toggles (e.g., "Open menu" / "Close menu").
- Side menu:
  - MUST have `role="navigation"` and an accessible label.
  - Links MUST support Enter/Space and provide `aria-current="page"` for the active section.
  - Escape key must close the menu and return focus to the burger button.

Styling & DOM Assumptions (keep these selectors stable)
- Header expects `app-side-menu` to be its child in the template hierarchy. Do not move `SideMenu` elsewhere without changing the contract.
- The body scroll-lock class is `menu-open`. CSS and tests rely on this class name.
- Overlay element (used to close mobile menu) must exist and be focusable; prefer `data-overlay-for="side-menu"` or `.side-menu__overlay` as a stable selector.

Lifecycle & Ownership
- `ScrollObserverService` is provided at application scope (`providedIn: 'root'`) and may be subscribed to by multiple consumers, but ownership of calling `start()`/`stop()` is the navigation subsystem (Header lifecycle should call `start()` on init and `stop()` on destroy if the service is not needed globally).
- `Header` owns creation of `menuInteraction$`. Child components may subscribe in `ngOnInit` and must unsubscribe in `ngOnDestroy`.

Change Approval Checklist (apply before merging changes that touch this subsystem)
- Run full build: `npm run build` from `packages/frontend` and confirm success.
- Run or add unit tests for `ScrollObserverService` demonstrating expected active-section transitions.
- Manual smoke test steps:
  1. Open page and verify burger toggles menu and `aria-expanded` flips.
  2. Open mobile menu, press Escape, and verify focus returns to burger and menu closes.
  3. Click a navigation link: ensure smooth scroll occurs, URL has no fragment, and `ScrollObserverService.currentSection$` emits the new section id.
  4. Hover side menu (or otherwise trigger `menuInteraction$`) and confirm `CvDownloadComponent` reacts when subscribed.
- Search the diff for new `document.querySelector` / `dispatchEvent` usage; any new global queries must be flagged and justified.

Extension Points (safe ways to evolve)
- Extract visual-only logic (canvas engines, animations) into standalone services with no DOM queries; components remain thin adapters.
- If another consumer needs active-section info, subscribe to `ScrollObserverService.currentSection$` rather than duplicating logic.
- If the menu needs richer interactions, extend `menuInteraction$` to carry typed payloads (e.g., `{ type: 'hover'|'open'|'close' }`) but update the contract and all consumers simultaneously.

Minimal Examples
- Header creates and passes the channel:

```ts
menuInteraction$ = new Subject<void>();
// template: <app-side-menu [menuInteraction$]="menuInteraction$" ...></app-side-menu>
```

- Using the scroll service in `Header`:

```ts
constructor(private scrollObserver: ScrollObserverService) {
  this.scrollObserver.currentSection$.subscribe(id => this.activeSection = id);
}

// After programmatic navigation
this.scrollObserver.setActiveSection(sectionId);
this.scrollObserver.detectNow();
```

What Not To Change (quick list)
- Do not reintroduce global custom events to connect menu components.
- Do not move `SideMenu` out of `Header` without updating the contract and tests.
- Do not remove `ScrollObserverService` or split its responsibilities across components without replacing the single-source API.

Document Metadata
- Author: Architecture contract generated 2025-09-18.
