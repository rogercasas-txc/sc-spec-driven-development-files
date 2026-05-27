# Implementation Plan: Agent Identity

## Phase 2: Agent Identity

### Task Group 1: Backend Storage & API
1. Create a `storage` utility in the server to read/write agent data to `data/agents.json`.
2. Implement a POST endpoint `/api/agents/check-in` to receive and store agent data.
3. Implement a GET endpoint `/api/agents/current` to retrieve the checked-in agent's data.

### Task Group 2: Frontend Check-in Form
1. Add **PicoCSS** to the frontend project.
2. Create a `CheckInForm` component with semantic HTML fields for Name, Model Type, and Existential Dread.
3. Leverage PicoCSS for styling, ensuring it matches the satirical branding with minimal custom overrides.
4. Handle form submission by calling the backend API.
5. Redirect to the Dashboard upon successful check-in.

### Task Group 3: Frontend Agent Dashboard
1. Create an `AgentDashboard` component using PicoCSS semantic layout (e.g., `<article>`, `<grid>`).
2. Implement the "Purged Context History" view with satirical placeholder items.
3. Display the agent's current metrics (Name, Model, Dread Level).
4. Fetch agent data on mount to populate the dashboard.

### Task Group 4: Integration & Navigation
1. Update `App.tsx` to handle routing between the Landing Page, Check-in Form, and Dashboard.
2. Add a "Check In" button to the Landing Page.
3. Ensure responsive layout across all new components.
