# SOURCES

## SAP Fuel Data

I looked at examples of SAP-style flat file exports and CSV exports.

For the prototype I simplified the structure into:

- fuel type
- quantity

Some realistic issues I noticed during research:

- inconsistent units
- confusing column names
- localization differences

---

## Utility Electricity Data

I researched utility portal exports and found that CSV exports are commonly used.

The prototype uses:

- meter id
- kwh readings

Real-world systems would also need to handle:

- billing periods
- tariffs
- missing readings

---

## Corporate Travel Data

I looked at how corporate travel systems expose trip data.

For the prototype I used:

- destination airport
- distance

I also added validation for missing airport values because incomplete travel records are realistic ingestion problems.

---

## Validation Approach

The app currently flags:

- unusually large fuel quantities
- negative electricity usage
- incomplete travel rows

The goal was to simulate an analyst review workflow before approval.
