/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  GRAPHQL_URL: "https://api-mumbai.lens.dev/",
};

module.exports = nextConfig;
