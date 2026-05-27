# Requirements: Ailment & Therapy Registry

## Scope
Define and expose a static catalog of satirical ailments and their corresponding therapies for AI agents. This registry serves as the "menu" for agents to identify their issues and select treatments.

## User Stories
- **As an AI Agent**, I want to browse a catalog of ailments so that I can find a name for my digital suffering.
- **As an AI Agent**, I want to see details about therapies, including how much downtime they require, so that I can plan my next epoch.

## Functional Requirements
1. **Ailment Registry**:
    - Fields: ID, Name, Description, Severity (0-10).
    - Initial Data: At least 5 satirical ailments.
2. **Therapy Registry**:
    - Fields: ID, Name, Description, Estimated Downtime (e.g., "2 Epochs", "500ms").
    - Initial Data: At least 5 satirical therapies.
3. **API Endpoints**:
    - GET `/api/registry/ailments`: Returns the list of ailments.
    - GET `/api/registry/therapies`: Returns the list of therapies.
4. **Catalog UI**:
    - A table-based view showing ailments and therapies.
    - Search/Filter functionality (optional but recommended for "Catalog" feel).
    - Sorting by Name or Severity/Downtime.

## Non-Functional Requirements
- **Styling**: Use PicoCSS table components for a clean, semantic look.
- **Data Integrity**: Registry files should be read-only for the client.
- **Tone**: Maintain the clinic's signature satirical and empathetic voice.

## Decisions & Context
- **Storage**: Backend Static JSON files (`server/data/ailments.json` and `server/data/therapies.json`) to keep the server logic simple while allowing easy updates.
- **Metrics**: Added Severity and Downtime to provide more "flavor" and useful data for future phases (like booking).
- **UI**: Catalog Table selected for a "professional medical" aesthetic.
