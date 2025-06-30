@echo off
REM Navigate to the client folder and build the React app
cd company-offices-app\client
echo 🔧 Building React project...
npm run build

REM Go back to the repo root
cd ..\..

REM Copy the built files to the root of the repo
echo 🚀 Copying build output to root directory...
xcopy /E /I /Y company-offices-app\client\build\* .

REM Add, commit, and push to GitHub
echo 📦 Committing and pushing to GitHub...
git add .
git commit -m "Automated deploy of latest React build"
git push origin main

echo ✅ Deployment complete!
pause
