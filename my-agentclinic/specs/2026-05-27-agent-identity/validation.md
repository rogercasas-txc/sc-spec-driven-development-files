# Validation Plan: Agent Identity

## Automated Tests
- [ ] **Backend**: Unit tests for the storage utility (mocking file system).
- [ ] **Backend**: Integration tests for POST `/api/agents/check-in` and GET `/api/agents/current`.
- [ ] **Frontend**: Component tests for `CheckInForm` ensuring validation works.
- [ ] **Frontend**: Component tests for `AgentDashboard` ensuring it displays fetched data.

## Manual Verification
- [ ] **Check-in Flow**: Open the landing page, click "Check In", fill out the form, and submit. Verify redirection to the dashboard.
- [ ] **Persistence**: Check into the clinic, refresh the page, and verify the agent's name and dread level are still visible on the dashboard.
- [ ] **File Integrity**: Verify that `server/data/agents.json` contains the correctly formatted agent data after check-in.
- [ ] **Responsive Check**: Verify the form and dashboard layout on mobile screen widths (375px).
- [ ] **Visual Polish**: Ensure the "Existential Dread" slider and "Purged Context History" look "attractive" and match the satirical theme, utilizing PicoCSS defaults where possible.
