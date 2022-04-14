const path = require("path");
const getLocales = require("./scripts/get-locales");

// Load the .env.local env file
require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });

// Fallback to PANTHEON_CMS_ENDPOINT if BACKEND_URL is not set
let backendUrl, imageDomain;
if (process.env.BACKEND_URL === undefined) {
  backendUrl = process.env.PANTHEON_CMS_ENDPOINT;
  imageDomain =
    process.env.IMAGE_DOMAIN ||
    process.env.PANTHEON_CMS_ENDPOINT?.replace(/^https:\/\//, "");

  process.env.BACKEND_URL = process.env.PANTHEON_CMS_ENDPOINT;
} else {
  backendUrl = process.env.BACKEND_URL;
  imageDomain =
    process.env.IMAGE_DOMAIN ||
    process.env.BACKEND_URL.replace(/^https:\/\//, "");
}
// remove trailing slash from iamgeDomain if it exists
imageDomain = imageDomain.replace(/\/$/, "");

module.exports = async () => {
  const nextConfig = {
    env: {
      backendUrl: backendUrl,
      // set imageUrl if IMAGE_DOMAIN is set in env vars to override default
      imageUrl: `https://${imageDomain}`,
    },
    reactStrictMode: true,
    images: {
      domains: [imageDomain],
    },
    i18n: {
      locales: await getLocales(),
      defaultLocale: "en",
    },
    async rewrites() {
      return [
        {
          // inline-images can still be fetched from their source
          source: "/sites/default/:path*",
          destination: `${backendUrl}/sites/default/:path*`,
        },
      ];
    },
    // In order to have the same layout data on each page, we need to fetch the data at buildtime
    // and save it to a local file.
    // see https://maxkarlsson.dev/blog/layout-in-next-js-from-external-source for more info
    webpack: (config, { isServer }) => {
      if (isServer) {
        require("./scripts/generate-layout")();
      }
      return config;
    },
  };

  return nextConfig;
};
