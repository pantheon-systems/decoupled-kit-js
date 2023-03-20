---
'create-pantheon-decoupled-kit': minor
---

Added a new action: `addDependencies`. This action allows a generator to add
dependencies to the `package.json` at the specified `outDir`.

Added a new add-on generator: `tailwindcss-addon`. This generator adds necessary
dependencies and configs to use with `@pantheon-systems` dependency that rely on
`tailwindcss`.
