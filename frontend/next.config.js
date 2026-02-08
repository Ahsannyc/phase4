/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone mode for Docker deployment
  output: 'standalone',

  // Configure TypeScript
  typescript: {
    // Allow builds with TypeScript errors for now
    ignoreBuildErrors: false,
  },

  // Configure SWC minifier
  swcMinify: true,

  // Image optimization
  images: {
    unoptimized: true,
  },

  // Experimental features
  experimental: {
    // Enable app directory features if needed
  },
}

module.exports = nextConfig
