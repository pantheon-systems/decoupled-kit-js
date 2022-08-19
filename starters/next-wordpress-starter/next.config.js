const path = require("path");
const fs = require("fs");

let backendUrl, imageDomain;

// Load the .env file for local development
// .env.development.local by default
try {
  if (
    process.env.BACKEND_URL === undefined &&
    process.env.PANTHEON_CMS_ENDPOINT === undefined
  ) {
    throw new Error(
      "Please set critical environment variables PANTHEON_CMS_ENDPOINT or BACKEND_URL."
    );
  }
} catch (e) {
  console.error(e);
}

require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.development.local"),
});

if (process.env.WPGRAPHQL_URL === undefined) {
  backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
  imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;
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
