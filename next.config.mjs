/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {},
  headers: [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 's-maxage=1, stale-while-revalidate=59',
        },
      ],
    },
  ],
}

export default nextConfig
