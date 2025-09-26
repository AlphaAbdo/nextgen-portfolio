# Naming Convention  Header & About Subsystems

Scope
- **Updated Components**: The following components have been updated to follow this naming convention: `Header`, `SideMenu`, `NavMenu`, `CvDownload`, `ScrollObserverService`, `ConnectCollaborate`, `About` (including `JourneyTimeline`, `ProfileShowcase`, and related services), and their related models and types.
- **File Naming**: Component filenames, selectors, and template file suffixes remain as the repo currently uses (kebab-case filenames, `*.component.ts`, `app-` selectors). This document governs *types, members, services, models, enums, and internal helpers*.ing Convention  Header & About Subsystems

Scope
- Applies to the Header navigation subsystem and About section: `Header`, `SideMenu`, `NavMenu`, `CvDownload`, `ScrollObserverService`, `About` (including `JourneyTimeline`, `ProfileShowcase`, and related services), related models and types.
- Exceptions: component filenames, selectors, and template file suffixes remain as the repo currently uses (kebab-case filenames, `*.component.ts`, `app-` selectors). This document governs *types, members, services, models, enums, constants, and internal helpers*.

Core principle
- Anything is wrong until proven right: assume a name is incorrect unless it matches these rules. Be conservative and explicit when choosing names.

Type & Member Rules (Java-style preferences)
- Interfaces: prefix with `I` and use PascalCase. Example: `INavItem`, `IScrollObserverOptions`.
- Classes: PascalCase, no `I` prefix, suffixes permitted for clarity (e.g., `ScrollObserverService`, `HeaderController`).
- Methods & functions: camelCase verbs (e.g., `startObserving()`, `setActiveSection()`).
- Variables & fields: camelCase (e.g., `menuItems`, `activeSection`).
- Constants: UPPER_SNAKE_CASE for top-level `const` values that act like constants (e.g., `MENU_OPEN_CLASS`, `DEFAULT_SCROLL_THRESHOLD`).
- Enum types: PascalCase (e.g., `HeaderState`). Enum members: UPPER_SNAKE_CASE (Java-like) — acceptable here for consistency with core policy (e.g., `OPEN`, `CLOSED`).

Angular / TypeScript specifics (exceptions & additions)
- Component files & selectors: keep existing conventions (kebab-case filenames, `HeaderComponent` class name and `app-header` selector).
- Services: file `scroll-observer.service.ts`, class `ScrollObserverService`. If there is a related interface for its config or contract, name it `IScrollObserverConfig`.
- Observables: name with trailing `$` (e.g., `currentSection$`). This is still required to aid readability in TS/RxJS.
- Inputs/Outputs: camelCase. Use nouns for inputs (e.g., `menuItems`) and verbs for outputs (EventEmitters) (e.g., `navigate`, `closed`). If ambiguous, prefix inputs with `in` is NOT required; prefer clarity.
- Models / DTOs: prefixed with `I` (e.g., `INavItem`) **only if they are strictly interfaces**. If using a class for behavior, name it `NavItem` (PascalCase, no `I`).

Header-specific examples
- Interface model: `export interface INavItem { section: string; label: string; icon?: string; description?: string; }`
- Service class + observable: `export class ScrollObserverService { currentSection$: Observable<string | null>; start(root?: Element): void; stop(): void; }`
- Constant: `export const MENU_OPEN_CLASS = 'menu-open';`
- Enum: `export enum HeaderState { OPEN = 'OPEN', CLOSED = 'CLOSED' }`

About-specific examples (recently updated)
- Interface models: `export interface ISkillsData { skills: ISkillCategory[]; metadata?: ISkillsMetadata; }`
- Service interfaces: `export interface IOrbitConfig { maxOrbits: number; size: ISizeConfig; animation: IAnimationConfig; direction: 'alternating' | 'clockwise' | 'counterclockwise'; }`
- Timeline interfaces: `export interface IContentBlock { id: string; image: IImageData; content: IContentData; }`

Naming alignment rules (file  symbol  selector)
- When adding a new public type, ensure the filename and exported symbol reflect the same base name. (Example: `scroll-observer.service.ts` exports `ScrollObserverService` and `IScrollObserverConfig` if needed.)
- Component symbol vs selector: keep the current `app-` selector convention (no change).

Migration & renaming policy
- A rename requires updating: filename (if applicable), exported symbol name, import sites, tests, and docs. When changing public API names, add a short compatibility shim or deprecation comment for at least one release cycle.
- Use a single PR per large rename batch and include a grep listing of replaced identifiers in the PR description.

Enforcement checklist (manual + automation)
- Manual pre-commit checklist:
  - Does the type start with correct prefix/suffix? (I for interfaces)
  - Are Observables suffixed with `$`?
  - Are constants UPPER_SNAKE_CASE?
  - Are EventEmitters named as verbs?
- Automated suggestions:
  - Add ESLint rules where possible to flag non-camelCase variable names, missing `$` on observables, and inconsistent interface naming.
  - Add a small grep script `tools/check-names.sh` (suggestion) to validate common patterns under `src/app/components/home/header/**` and `src/app/components/home/about/**`.

Acceptance examples (good vs bad)
- Good: `interface INavItem { ... }` / `const MENU_OPEN_CLASS = 'menu-open'` / `currentSection$`
- Bad: `interface NavItem` (ambiguous with class), `menuOpenClass` (constant not uppercase), `currentSection` (observable without `$`)

Notes
- This convention intentionally borrows the Java `I`-interface prefix for clarity in core types. For public Angular components and templates we keep the Angular-native naming (no `I` prefix in selectors or component names).

If you confirm these rules, I'll:
- Create `packages/frontend/NAMING_CONVENTION_HEADER.md` (this file) as committed.
- Optionally add a small grep checker and a suggested ESLint snippet in a follow-up PR.

Author: Generated 2025-09-18
