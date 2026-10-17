# Adarsh Santhosh — Portfolio

Recruiter-focused portfolio for a **Python Django / Backend Developer** role.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Render

1. Push this repo to GitHub (see below).
2. In [Render](https://dashboard.render.com) → **New** → **Static Site**.
3. Connect the GitHub repo.
4. Settings:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
5. Deploy. Render gives you a `*.onrender.com` URL.

### Push to GitHub (first time)

Create an empty repo on GitHub (e.g. `portfolio`), then:

```bash
git remote add origin https://github.com/AdarshSidhu/portfolio.git
git push -u origin main
```

Replace the URL if your username/repo name differs.

## Edit content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — experience, projects, skills, links, and CV path.

CV PDF: [`public/adarsh_original.pdf`](public/adarsh_original.pdf)
