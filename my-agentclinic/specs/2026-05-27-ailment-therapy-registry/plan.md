# Implementation Plan: Ailment & Therapy Registry

## Phase 3: Ailment & Therapy Registry

### Task Group 1: Backend Data & API
1. Create `server/data/ailments.json` with initial satirical data.
2. Create `server/data/therapies.json` with initial satirical data.
3. Update `server/src/storage.ts` to include methods for reading these registries.
4. Implement GET `/api/registry/ailments` and `/api/registry/therapies` in `server/src/index.ts`.

### Task Group 2: Frontend Services & Types
1. Define TypeScript interfaces for `Ailment` and `Therapy` in the frontend.
2. Create a `registryService.ts` to handle API calls to the new endpoints.

### Task Group 3: Catalog UI Components
1. Create a `MedicalCatalog` component.
2. Implement two tables (or a togglable view) for Ailments and Therapies using PicoCSS.
3. Add basic sorting logic for Name, Severity, and Downtime.
4. Add a simple text filter/search.

### Task Group 4: Integration
1. Add a "Medical Catalog" link to the main navigation in `App.tsx`.
2. Ensure the catalog is accessible from both the Landing Page and the Dashboard.
