@echo off
cd /d "%~dp0"
node build-portfolio.cjs
if errorlevel 1 exit /b 1
echo Build complete. Review changes, then commit and push to publish.
pause
