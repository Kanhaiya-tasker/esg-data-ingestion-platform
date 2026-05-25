# DECISIONS

## Why CSV uploads?

I chose CSV uploads because they are very common during enterprise onboarding. Even when APIs exist, teams often initially share exported reports and flat files.

CSV uploads were also simpler to prototype within the assignment timeline while still representing realistic ingestion problems.

---

## Why Django + React?

The assignment specifically asked for Django and React.

I used Django REST Framework for the backend APIs and React for the analyst dashboard UI.

---

## Why MySQL?

I used MySQL because I already had experience working with it and it allowed faster development during the assignment.

---

## Why suspicious validation?

One requirement was helping analysts review bad or unusual data before audit approval.

I added basic suspicious checks like:

- high fuel quantities
- negative electricity values
- missing travel destination fields

---

## Why a single normalized table?

Instead of storing every source in different schemas, I normalized all records into one structure to simplify ingestion and dashboard rendering.
