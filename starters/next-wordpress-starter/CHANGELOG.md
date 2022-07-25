# @pantheon-systems/next-wordpress-starter

## 0.4.0

### Minor Changes

- b7e9b1f: Added pages grid in the route /pages, getting data by static generating
- 2f72e82: Added the Post component to the `/posts/[slug]` route that renders a post from WordPress.
- d49504b: Added the dynamic route [uri] inside /pages that fetch statically the page data
- 0db7b52: Imported tailwind plugin from Wordpress-Kit
- 04f4e0c: Added to the /post route the post grid with server side rendering

### Patch Changes

- Updated dependencies [0db7b52]
  - @pantheon-systems/wordpress-kit@2.1.0

## 0.3.0

### Minor Changes

- d53fee9: Added the HOC withGrid, and the PostGridItem component to render the posts, that components are used in the home page, also created the Posts file in lib, where added the getLatestPosts function
- 5dfbb69: [next-wordpress-starter] Added to the lib the implementation to get the client, the use of that client in each page to get the footer menu, and the logic to render the options in the footer component

### Patch Changes

- Updated dependencies [5dfbb69]
  - @pantheon-systems/wordpress-kit@2.0.0

## 0.2.0

### Minor Changes

- b27b218: Added Footer, Header, Layout and Page-Header components to the next-wordpress-starter, created index page and work in progress pages/index and posts/index
- 02049ef: [next-wordpress-starter] Initialized the `next-wordpress-starter`
