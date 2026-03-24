@echo off
REM --- Portfolio API Server Runner ---

REM Step 1: Go to project root
cd /d %~dp0

REM Step 2: Install dependencies (if needed)
if not exist node_modules (
    echo Installing root dependencies...
    pnpm install
)

REM Step 3: Go to API server directory
cd artifacts\api-server

REM Step 4: Install API server dependencies (if needed)
if not exist node_modules (
    echo Installing API server dependencies...
    pnpm install
)

REM Step 5: Build the API server
pnpm run build

REM Step 6: Set PORT and start the server
set PORT=5000
pnpm run start

REM Keep window open if error
pause
