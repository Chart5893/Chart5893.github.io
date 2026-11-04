# Christian Hart — Developer Portfolio

Personal portfolio at https://chart5893.github.io, featuring independent software projects and computer science capstone work.

## Featured work
- Handy Farmer: independent Android farm-management project.
- Floor-anchored WebAR: mobile AR interaction and architecture showcase.
- Pokémon Team Selector: experimental Python battle-simulation backend.
- Company Offices App, Treasure Hunt AI, and Grocery Frequency Tracker: academic projects and case studies.

## Develop
The React source lives in `company-offices-app/client`.

```sh
cd company-offices-app/client
npm ci
npm start
```

## Build for GitHub Pages
From the repository root:

```sh
node build-portfolio.cjs
```

This builds the React app and copies the production output into the repository root, including the Company Offices results page and images. Existing academic project directories are preserved. Review and commit both the source changes and the generated output before pushing.

The homepage uses static case studies; it does not require the Company Offices backend or an AR SDK to run. Project links distinguish source showcases from runnable demos. The original academic reflection is preserved at `/capstone-assessment.html`.

## Content
Edit `company-offices-app/client/src/App.js` for project descriptions and biography, and `src/App.css` for styling. Keep project status and capabilities accurate. Handy Farmer currently has no public download or repository link on the portfolio.
