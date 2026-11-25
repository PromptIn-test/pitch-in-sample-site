import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";

// Plain checks on the HTML, no dependencies: every page has a title, uses the
// shared stylesheet, and every local link points at a file that exists.

const pages = readdirSync(".").filter((f) => f.endsWith(".html"));

test("every page has a title", () => {
  for (const page of pages) {
    assert.match(readFileSync(page, "utf8"), /<title>[^<]+<\/title>/, `${page} has no <title>`);
  }
});

test("every page uses the shared stylesheet", () => {
  for (const page of pages) {
    assert.match(readFileSync(page, "utf8"), /<link rel="stylesheet" href="styles\.css"/, `${page} doesn't link styles.css`);
  }
});

test("every local link points at a file that exists", () => {
  for (const page of pages) {
    for (const [, href] of readFileSync(page, "utf8").matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
      if (/^[a-z]+:/i.test(href)) continue;
      assert.ok(existsSync(href), `${page} links to ${href}, which doesn't exist`);
    }
  }
});
