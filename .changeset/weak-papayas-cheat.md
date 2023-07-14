---
'create-pantheon-decoupled-kit': patch
---

[next-drupal] Added logic to `api/preview.js` that returns JSON which indicates if
there are any issues with the preview route or secret if the `test=true` query
param exists on the request URL.
