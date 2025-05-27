/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/chiangyenju.github.io',
  assetPrefix: '/chiangyenju.github.io/',
}

module.exports = nextConfig 