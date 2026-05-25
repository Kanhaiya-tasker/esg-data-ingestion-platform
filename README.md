# ESG Data Ingestion Platform

This project is a small prototype built for the Breathe ESG internship assignment.

The goal was to simulate how ESG-related operational data from different enterprise systems can be ingested, normalized, reviewed, and approved before audit workflows.

The app currently supports:
- SAP-style fuel data
- utility electricity data
- corporate travel data

All three sources are uploaded as CSV files and normalized into a single structure for analyst review.

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
- MySQL

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
