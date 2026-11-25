# Project brief: pitch-in-sample-site

> Sample data, written to the Pitch In project-brief template.

## What the project does

A two-page static website for Maple Street Bakery, an invented neighbourhood bakery. It is a throwaway repo for testing Pitch In with website work. It has no users and isn't deployed anywhere.

## Stack and versions

- Plain HTML and CSS, no framework and no build step.
- Node 20 or newer only for the checks (CI uses Node 22). No dependencies.

## Setup and test commands

```
npm test
```

There is nothing to install. `npm test` runs `node --test`, which checks every page has a title, uses `styles.css`, and that every local link points at a file that exists. To look at the site, open `index.html` in a browser.

## Repo map

- `index.html`: home page (hero, hours, order ahead)
- `about.html`: about page
- `styles.css`: the one stylesheet every page uses
- `tests/site.test.js`: the checks `npm test` runs
- `.github/workflows/ci.yml`: CI, runs `npm test`

## Conventions

- Every page has the same header and nav, a `<title>` and links `styles.css`.
- HTML: 2-space indentation, lowercase tags, double-quoted attributes.
- CSS: one stylesheet, class names in kebab-case, no inline styles.
- Copy: short sentences, Canadian spelling.
- Commits: one short imperative line.

## Definition of done

- `npm test` passes.
- Every page still has the shared header, nav and stylesheet.
- Pages read well at 375 px wide (a phone) and on a laptop.
