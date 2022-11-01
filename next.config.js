/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 828, 1080, 1920, 2048],
    imageSizes: [16, 64, 128, 256, 384]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
