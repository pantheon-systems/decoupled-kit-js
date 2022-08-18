const path = require("path");
const fs = require("fs");

let backendUrl, imageDomain;
try {
  // Load the .env file for local development
  // .env.development.local by default
  if (!fs.existsSync(path.resolve(process.cwd(), ".env.development.local"))) {
    throw new Error(
      "Please set a .env.development.local file with the critical environment variables."
    );
  }

  require("dotenv").config({
    path: path.resolve(process.cwd(), ".env.development.local"),
  });

  if (process.env.IMAGE_DOMAIN === undefined) {
    throw new Error(
      "Please set IMAGE_DOMAIN in the .env.development.local file"
    );
  }

  if (process.env.WPGRAPHQL_URL === undefined) {
    backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}/wp/graphql`;
    imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;
  } else {
    backendUrl = process.env.WPGRAPHQL_URL;
    imageDomain = process.env.IMAGE_DOMAIN || process.env.WPGRAPHQL_URL;
  }
} catch (e) {
  console.error(e);
  process.exit(1);
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
