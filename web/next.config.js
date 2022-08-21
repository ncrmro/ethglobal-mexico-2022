/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    GRAPHQL_URL: "https://api.lens.dev",
  },
};

module.exports = nextConfig;
