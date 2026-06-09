# Notes Books v2 (Blended JS Practice)

Simple task manager built with Vite. Add and remove tasks; tasks persist in
`localStorage`. Includes a theme switcher and a minimal component structure for
practice with modular JavaScript.

## Features

- Add tasks with a title and description
- Delete tasks from the list
- Tasks persist across page reloads via `localStorage`
- Theme switching (light/dark)

## Getting started

Prerequisites: Node.js (LTS recommended)

Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Open http://localhost:5173 in your browser.

Build for production:

```
npm run build
```

Preview production build locally:

```
npm run preview
```

## Scripts

From `package.json`:

```
"dev": "vite",
"build": "vite build --base=/blended-js-practice/",
"preview": "vite preview"
```

Make sure the `--base` value matches your repository name when deploying to
GitHub Pages (the current value is `/blended-js-practice/`).

## Project structure (key files)

- `index.html` — app entry
- `src/main.js` — app initialization and event wiring
- `src/js/handlers.js` — form submit and delete handlers
- `src/js/local-storage-api.js` — persistence layer
- `src/js/render-tasks.js` — DOM rendering of task list
- `src/js/theme-switcher.js` — theme initialization and toggle
- `src/partials/` — HTML fragments (header, tasks list)

## Usage

1. Fill the task title and description and click **Add**.
2. Click **Delete** on a task to remove it.
3. Tasks are saved in the browser `localStorage` and survive reloads.

## Deploy

This project is configured to build with a repository base of
`/blended-js-practice/`. To deploy to GitHub Pages:

1. Update `build` script `--base=/REPO_NAME/` (replace `REPO_NAME`).
2. Build and push the `gh-pages` branch (or use a GitHub Action to automate).

## Contributing

Open issues or pull requests. This repo is intended as a learning/practice
template.

## License

ISC



