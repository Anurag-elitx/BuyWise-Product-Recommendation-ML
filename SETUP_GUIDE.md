# Food-E Project Setup & Run Guide

## Quick Start
Run everything with a single command:
```bash
npm run dev
```

## Manual Run Instructions

1. **Frontend & Node Backend**
   ```bash
   npm run both
   ```
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

2. **Flask Recommendation Engine**
   ```bash
   cd backend
   .\env\Scripts\activate
   flask run
   ```
   - Server: http://localhost:5001

## Setup Steps (Completed)
- Dependencies installed.
- Python virtual environment created in `backend/env`.
- Flask configured to run on port 5001 to avoid conflict with Node backend.
