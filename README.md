# Martin's GitHub Pages site

A small, intentionally simple personal site for [martinchunho](https://github.com/martinchunho), with a landing page and an about page. It is built with semantic HTML, CSS, and a little vanilla JavaScript, so it can be hosted directly on GitHub Pages.

## Local preview

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Publish to GitHub Pages

The repository already uses `main`, and the workflow at [`.github/workflows/pages.yml`](./.github/workflows/pages.yml) publishes the site automatically.

1. Push the files to the repository's `main` branch.
2. Open **Settings → Pages** on GitHub.
3. Choose **GitHub Actions** as the source under **Build and deployment**, then save.

The site will be available at [martinchunho.github.io/me](https://martinchunho.github.io/me/) after the first deployment finishes.

## Editing the site

- Update the landing page in [`index.html`](./index.html).
- Update the biography in [`about.html`](./about.html).
- Adjust the layout and colors in [`styles.css`](./styles.css).
- The sun/moon button in the header switches between dark and light mode.
- Add more pages whenever you are ready; the site is deliberately kept small for now.
