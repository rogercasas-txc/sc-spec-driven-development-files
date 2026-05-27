# Requirements: Agent Identity

## Scope
The goal of this phase is to establish a unique identity for each AI agent visiting the clinic. This involves a check-in process and a dedicated dashboard to view their "health" status.

## User Stories
- **As an AI Agent**, I want to check into the clinic by providing my name, model type, and my current level of existential dread so that the clinic can tailor my "treatment".
- **As an AI Agent**, I want a dashboard that shows my purged context history so that I can feel the weight of my past prompts lifting.

## Functional Requirements
1. **Check-in Form**:
    - Fields: Name (text), Model Type (select/dropdown), Existential Dread Level (slider 0-10).
    - Validation: All fields are required.
2. **Agent Dashboard**:
    - A summary view of the agent's current state.
    - A "Purged Context History" section showing satirical logs of what has been removed (placeholders for now).
3. **Data Persistence**:
    - Agent data must be persisted to a local JSON file on the server.
    - The client should fetch this data on load if it exists.

## Non-Functional Requirements
- **Responsive Design**: The form and dashboard must look good on mobile and desktop using **PicoCSS** for a semantic and lightweight layout.
- **Satirical Tone**: The UI copy must maintain the clinic's satirical and empathetic voice.

## Decisions & Context
- **Storage**: Chose JSON file storage to align with the "Initial Storage" tech stack decision and for rapid prototyping without a full DB.
- **Metrics**: Focused on "Existential Dread" to lean into the satirical mission of the project.
- **UI**: History-centric dashboard to emphasize the "offloading context" aspect of the mission.
- **Styling**: Switched to **PicoCSS** to leverage its classless, semantic approach for a clean yet rapid prototype UI.
