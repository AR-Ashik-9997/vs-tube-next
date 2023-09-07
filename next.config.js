/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["i.ibb.co", "theme4press.com"],
  },
  nextConfig,
  env: { DB_HOST: process.env.DB_HOST },
};
