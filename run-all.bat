@echo off
REM --- Run Backend and Frontend Together ---

REM Step 1: Go to project root
cd /d %~dp0

REM Step 2: Start Backend (API Server) in new window
start "Backend (API Server)" cmd /k "cd /d artifacts\api-server && pnpm install && set PORT=5000 && pnpm run build && pnpm run start"

REM Step 3: Start Frontend (Portfolio) in new window
start "Frontend (Portfolio)" cmd /k "cd /d artifacts\portfolio && pnpm install && set PORT=5173 && set BASE_PATH=/ && pnpm run dev"

REM Step 4: Show message

echo Backend and Frontend are starting in separate windows...
pause
