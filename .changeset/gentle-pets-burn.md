---
"@pantheon-systems/next-wordpress-starter": minor
---

Added the Post component that renders a post from wordpress, also added the dynamic route [slug] to the /posts where the post is getted by SSR using the getPostBySlug function, that query a post by slog, that function is in the /lib/Post.js file, then in the grid.js the PostGridItem the href of the Link has the /posts prefix, same with the footer
