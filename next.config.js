/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.builder.io", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
