# Validation Plan: Ailment & Therapy Registry

## Automated Tests
- [ ] **Backend**: Integration tests for GET `/api/registry/ailments` and `/api/registry/therapies`.
- [ ] **Frontend**: Unit tests for sorting logic in the `MedicalCatalog` component.
- [ ] **Frontend**: Component tests ensuring the table renders data from the service.

## Manual Verification
- [ ] **API Check**: Visit `/api/registry/ailments` in the browser/Postman and verify JSON structure.
- [ ] **UI Catalog**: Navigate to the "Medical Catalog" and verify both Ailments and Therapies are listed.
- [ ] **Sorting**: Click column headers to verify sorting by Name, Severity (Ailments), and Downtime (Therapies).
- [ ] **Filtering**: Type in the search box and verify the table filters results correctly.
- [ ] **PicoCSS Check**: Verify the table looks semantic and professional on different screen sizes.
