# MODEL

I used a single main table called `EmissionRecord` to store normalized ESG activity data coming from different source systems.

The goal was to avoid creating separate tables for every source type and instead convert all incoming records into one consistent structure.

The model currently handles:

- SAP fuel records
- utility electricity records
- corporate travel records

Important fields:

- `source_type` → identifies where the record came from
- `activity_type` → fuel, electricity, flight, etc
- `quantity` and `unit`
- `status` → pending, suspicious, approved
- `raw_data` → stores the original uploaded CSV row

I stored the raw uploaded row in JSON format because in real ingestion systems analysts often need to compare normalized values with the original source data.

I also separated validation logic into `validators.py` and CSV processing into `services.py` to keep the API views cleaner and easier to maintain.
