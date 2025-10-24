/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dulces-petalos.jakala.es',
        port: '',
      },
    ],
  },
}

export default nextConfig