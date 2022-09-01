---
"@pantheon-systems/nextjs-kit": major
---

## Breaking Change

Fixed published bundle so that it includes types and necessary css. To upgrade, if you were importing from a subpath like `@pantheon-systems/nextjs-kit/sortChar`, remove the subpath so you are importing from `@pantheon-systems/nextjs-kit` instead.

For components, exports are now named and also no longer using subpaths.

To use styles exported from the `nextjs-kit`, import `@patheon-systems/nextjs-kit/style.css` into your `_app.jsx` file
