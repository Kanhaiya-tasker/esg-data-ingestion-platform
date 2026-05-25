# ESG Data Ingestion Platform

The goal was to simulate how ESG-related operational data from different enterprise systems can be ingested, normalized, reviewed, and approved before audit workflows.

The repository includes sample CSV files inside the frontend folder for testing the application:

* sap.csv
  → Select source type: SAP
  → Then upload sap.csv

* utility.csv
  → Select source type: Utility
  → Then upload utility.csv

* travel.csv
  → Select source type: Travel
  → Then upload travel.csv

Suggested testing flow:

1. Open the deployed frontend application
2. Select a source type from the dropdown
3. Upload the corresponding CSV file
4. Review generated records in the dashboard
5. Verify suspicious record detection
6. Test the approve workflow using the Approve button

---

# Tech Stack

Frontend:
- React
- Tailwind CSS
- Axios

Backend:
- Django
- Django REST Framework
- Pandas

Database:
- SQLite

---

# Features

- CSV upload workflow
- Multi-source ingestion
- Suspicious record detection
- Analyst review dashboard
- Record approval flow
- REST APIs
- Persistent database storage

---

# Example Validation Rules

Some simple validation rules were added to simulate analyst review scenarios.

Examples:
- unusually high fuel quantity
- negative electricity usage
- incomplete travel records

Suspicious records are flagged before approval.

---

# Project Structure

```bash
backend/
frontend/

MODEL.md
DECISIONS.md
TRADEOFFS.md
SOURCES.md
