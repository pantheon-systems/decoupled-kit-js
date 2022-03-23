const path = require("path");
const dotenv = require("dotenv");

// Register envars for dev, test, live or local if available
switch (process.env.BACKEND_ENV) {
  case "dev":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.dev") });
  case "test":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.test") });
  case "live":
    dotenv.config({ path: path.resolve(process.cwd(), ".env.live") });
  default:
    dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
}

if (
  process.env.BACKEND_ENV === undefined &&
  process.env.BACKEND_SITE === undefined
) {
  process.env.BACKEND_ENV = "dev";
  process.env.BACKEND_SITE = "demo-decoupled-bridge";
}

const env = process.env.BACKEND_ENV;
const site = process.env.BACKEND_SITE;

module.exports = {
  env: {
    backendUrl:
      process.env.BACKEND_URL || `https://${env}-${site}.pantheonsite.io`,
  },
  reactStrictMode: true,
  images: {
    domains: [process.env.IMG_DOMAIN || `${env}-${site}.pantheonsite.io`],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
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
