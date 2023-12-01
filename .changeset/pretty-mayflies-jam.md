---
'@pantheon-systems/react-kit': minor
---

Lift the state to determine if the mobile nav menu is open in the Header
component to fix issues where metaframework Link components don't close the menu
when the framework doesn't actually change the route. Also fixed an issue where
the component was re-rendering more than necessary.
