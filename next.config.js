/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  pageExtensions: ['js', '[id].js', '[page].js', 'index.js'],
}

module.exports = nextConfig
