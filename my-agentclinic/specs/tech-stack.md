# AgentClinic Tech Stack

## Backend
- **Framework**: **Express.js** with **TypeScript**.
- **Rationale**: Mary's requirement for a "popular" and "reliable" stack. Express is the industry standard for Node.js, offering stability and a vast ecosystem.

## Frontend
- **Framework**: **React** with **Vite** and **TypeScript**.
- **Rationale**: Steve's requirement for a "modern" and "attractive" site. Vite provides a fast development experience, and React is the most popular choice for building interactive dashboards.

## Styling
- **Method**: **Vanilla CSS**.
- **Rationale**: Provides maximum control over the "attractive" design Steve wants without the overhead or constraints of a utility-first framework. Ensures a unique, polished, and **fully responsive aesthetic** across mobile, tablet, and desktop devices.

## Testing
- **Framework**: **Vitest**.
- **Rationale**: Provides a blazing fast unit and integration testing experience that integrates perfectly with the Vite-based frontend and the TypeScript-heavy backend.

## Persistence
- **Initial Storage**: Local JSON-based storage for rapid prototyping.
- **Future**: SQLite for a more robust local database.
