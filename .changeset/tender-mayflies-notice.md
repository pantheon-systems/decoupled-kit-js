---
'create-pantheon-decoupled-kit': patch
---

[next-wp] Added logic to `api/preview.js` that returns JSON which indicates
if there are any issues with the preview route or secret if the `test=true`
queryparam exists on the request URL.