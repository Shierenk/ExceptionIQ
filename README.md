# ExceptionIQ — Governed Finance Exception Agent

A working hackathon prototype based on the supplied ExceptionIQ specification.

## Architecture

- `frontend/`: React + Vite + TypeScript. Enterprise finance operations UI.
- `backend/`: Next.js + TypeScript. REST API, workflow/state transitions and seeded synthetic finance data.
- Persistence: `backend/data/db.json` for local demo state. No external database is required.

## Run

1. Node.js 20+ recommended.
2. From this folder:
    - `npm install`
    - `npm run install:all`
    - `npm run dev`
3. Frontend: http://localhost:5173
4. Backend: http://localhost:3001

Demo login accepts any non-empty email/password. The product is preloaded with synthetic finance cases.

## Core lifecycle

Exception → Investigation → Evidence → Deterministic Controls → Policy → Resolution PR → Human Approval → Shadow Ledger → Verification → Audit

## Included modules

Overview, Exception Queue, Approval Queue, Escalations, Investigation Runs, Evidence Register, Finance Records, Resolution PRs, Shadow Ledger, Verification, Audit Trail, Policies, Exception Skills and Tool Registry.

This prototype intentionally keeps the real-ledger connector behind the shadow ledger, matching the supplied hackathon spec.
