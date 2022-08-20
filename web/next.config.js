/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    GRAPHQL_URL: "https://api-mumbai.lens.dev/",
  },
};

module.exports = nextConfig;
