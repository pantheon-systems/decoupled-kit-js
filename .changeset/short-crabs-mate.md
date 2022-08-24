---
"@pantheon-systems/drupal-kit": minor
---

drupal-kit's defaultFetch was updated to set a cache control header of `cache-control: public, s-maxage=10, stale-while-revalidate=600` if a response object is passed.
