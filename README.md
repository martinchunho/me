# Martin's GitHub Pages site

A small, intentionally simple landing page for [Martinn1996](https://github.com/Martinn1996). It is built with semantic HTML, CSS, and a little vanilla JavaScript, so it can be hosted directly on GitHub Pages.

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

The site will be available at [martinn1996.github.io/me](https://martinn1996.github.io/me/) after the first deployment finishes.

## Editing the landing page

- Update the text and links in [`index.html`](./index.html).
- Adjust the layout and colors in [`styles.css`](./styles.css).
- Add more sections to `index.html` whenever you are ready; the page is deliberately kept small for now.
