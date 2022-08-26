const path = require("path");

// Load the .env file for local development
// .env.development.local by default
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.development.local"),
});

let backendUrl, imageDomain;
if (process.env.WPGRAPHQL_URL === undefined) {
  backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
  imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;

  // populate WPGRAPHQL_URL as a fallback and for build scripts
  process.env.WPGRAPHQL_URL = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
} else {
  backendUrl = process.env.WPGRAPHQL_URL;
  imageDomain = process.env.IMAGE_DOMAIN || process.env.WPGRAPHQL_URL;
}
// remove trailing slash if it exists
imageDomain = imageDomain.replace(/\/$/, "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: backendUrl,
    imageUrl: `https://${imageDomain}`,
  },
  images: {
    domains: [imageDomain],
  },
};

module.exports = nextConfig;
