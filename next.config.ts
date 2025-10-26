/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dulces-petalos.jakala.es',
      },
    ],
  },
}

export default nextConfig
