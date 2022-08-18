const path = require("path");
const getLocales = require("./scripts/get-locales");
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

  if (process.env.BACKEND_URL === undefined) {
    backendUrl = `https://${process.env.PANTHEON_CMS_ENDPOINT}`;
    imageDomain = process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT;

    // populate BACKEND_URL as a fallback and for build scripts
    process.env.BACKEND_URL = `https://${process.env.PANTHEON_CMS_ENDPOINT}`;
  } else {
    backendUrl = process.env.BACKEND_URL;
    imageDomain =
      process.env.IMAGE_DOMAIN ||
      process.env.BACKEND_URL.replace(/^https:\/\//, "");
  }
  // remove trailing slash if it exists
  imageDomain = imageDomain.replace(/\/$/, "");

  // expose FRONTEND_URL to properly set hrefLang
  // and remove trailing slash
  process.env.NEXT_PUBLIC_FRONTEND_URL = process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL?.replace(/\/$/, "")
    : "";
} catch (e) {
  console.error(e);
  process.exit(1);
}
module.exports = async () => {
  const locales = await getLocales();
  const nextConfig = {
    env: {
      backendUrl: backendUrl,
      // set imageUrl if IMAGE_DOMAIN is set in env vars to override default
      imageUrl: `https://${imageDomain}`,
      // makes locales available to lib/stores.js
      locales: locales,
    },
    reactStrictMode: true,
    images: {
      domains: [imageDomain],
    },
    i18n: {
      locales: locales,
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
  };

  return nextConfig;
};
