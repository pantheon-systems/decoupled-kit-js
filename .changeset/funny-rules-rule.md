---
'@pantheon-systems/nextjs-kit': patch
---

Use tsup for bundle - vite was not properly externalizing some packages leading
to errors in the bundle
