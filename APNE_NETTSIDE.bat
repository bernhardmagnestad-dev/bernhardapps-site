@echo off
setlocal

set "SITE_DIR=C:\Users\Bruker\Documents\Codex\2026-07-10\hv\dist"
set "PYTHON_EXE=C:\Users\Bruker\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
set "SITE_URL=http://127.0.0.1:4173/"

if not exist "%SITE_DIR%\index.html" (
  echo Could not find the built website:
  echo %SITE_DIR%\index.html
  echo.
  echo Run pnpm build first, then try again.
  pause
  exit /b 1
)

if not exist "%PYTHON_EXE%" (
  echo Could not find the bundled Python runtime:
  echo %PYTHON_EXE%
  pause
  exit /b 1
)

start "Bernhard Apps Website Server" cmd /k "cd /d ""%SITE_DIR%"" && ""%PYTHON_EXE%"" -m http.server 4173 --bind 127.0.0.1"
timeout /t 2 /nobreak >nul
start "" "%SITE_URL%"

echo Bernhard Apps website should now be open at:
echo %SITE_URL%
echo.
echo Keep the server window open while viewing the website.
pause
