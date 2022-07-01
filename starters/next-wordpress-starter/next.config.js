const path = require("path");

// Load the .env file for local development
// .env.development.local by default
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env.development.local"),
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: process.env.WPGRAPHQL_URL,
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
};

module.exports = nextConfig;
