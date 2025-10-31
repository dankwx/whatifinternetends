/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports and optimize SEO
  output: 'standalone',
  
  // Compress resources
  compress: true,
  
  // Generate sitemap
  generateEtags: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },

  // Redirects
  async redirects() {
    return []
  },
};

export default nextConfig;
