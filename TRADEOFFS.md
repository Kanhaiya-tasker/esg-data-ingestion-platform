# TRADEOFFS

## Authentication

I did not add authentication or role management because I wanted to focus more on ingestion workflows and analyst review functionality.

---

## PDF parsing

I decided not to handle PDF utility bills because reliable parsing would take additional time and I wanted to prioritize structured ingestion flows first.

---

## Background jobs

CSV processing currently runs synchronously.

In a larger production system I would move ingestion into async workers or queues.

---

## Simplified ESG calculations

The prototype focuses mainly on ingestion and analyst review workflows, not detailed carbon accounting calculations.
