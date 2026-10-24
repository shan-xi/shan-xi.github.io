# Shan Xi Liao — Personal Portfolio

A responsive personal portfolio rebuilt with React, TypeScript, and Vite. It is deployed to GitHub Pages at <https://shan-xi.github.io/>.

## Tech stack

- React 18 + TypeScript
- Vite for development and production builds
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Run locally

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL (usually `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. Do not commit `dist/` or `node_modules/`.

## GitHub Actions deployment

The workflow at `.github/workflows/deploy.yml` runs when code is pushed to `main`, or when manually started from the Actions tab. It checks out the repository, installs project dependencies, runs the TypeScript/Vite production build, uploads `dist/`, and deploys it to GitHub Pages.

### One-time GitHub setup

1. Push this project to the `main` branch of `shan-xi.github.io`.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the **Actions** tab and check the “Build and deploy portfolio to GitHub Pages” workflow.
5. After the workflow succeeds, visit <https://shan-xi.github.io/>.

The workflow uses the official GitHub Pages artifact deployment actions and the required `pages: write` and `id-token: write` permissions. The site is a user/organization Pages site (`shan-xi.github.io`), so Vite's default root base path is correct.

## Project structure

```text
.
├── .github/workflows/deploy.yml  # CI/CD build and deploy
├── public/img/                  # Existing portfolio images and icons
├── index.html                    # Vite HTML entry point and SEO metadata
├── src/
│   ├── App.tsx                   # Portfolio sections and project content
│   ├── main.tsx                  # React application entry point
│   └── styles.css                # Responsive visual design
├── package.json
├── tsconfig.app.json
└── vite.config.ts
```

## Updating content

Edit the `experiences`, `focusAreas`, and credential markup in `src/App.tsx`. Add image assets under `public/img/` and reference them with `/img/filename.ext`. Project descriptions and key contributions are restored from the original portfolio and the supplied October 2026 CV. Screenshot galleries use the original project-specific image files; click any screenshot to view it larger. The portrait image at `public/img/189752.jpg` is unchanged.


## Bilingual portfolio (English / 繁體中文)

The site includes an **EN / 繁體中文** switch in the top navigation. The selected language is saved in the browser's `localStorage`, so it is retained on the next visit. The existing page structure, project galleries, image paths under `/img/`, and image files are preserved.

### Updating translations

All UI and portfolio-content translations are in `src/App.tsx`, in the `translations` dictionary near the top of the file. The `t()` helper returns English by default and the Traditional Chinese translation when the language is set to `zh-TW`. To update wording, edit the matching dictionary value. If a new visible English phrase is added, add its Traditional Chinese translation to this dictionary and render the phrase through `t()`.

### Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```
