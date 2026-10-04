# Akshaya Kumar – Portfolio

Static site (HTML + the template's own CSS/JS) served with Vite.

## Run in VS Code
```bash
npm install
npm run dev        # opens http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the build
```

## Edit content
- Text/sections: `build.py` and `projects_data.py` (then run `python3 build.py`) **or** edit `index.html` directly.
- Images: `public/assets/images/`  (profile: `shapes/akshaya-waist.png`, logo: `logo/logo.png`, favicon: `public/favicon.png`)
- CVs (3 role-based PDFs shown in the Download CV chooser): `public/assets/resumes/`
- Extra sections' styling: `public/assets/css/akshaya.css`

## Deploy
Push this folder to GitHub; Vercel detects Vite automatically (build `npm run build`, output `dist`).
