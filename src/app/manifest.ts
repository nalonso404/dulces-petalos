import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dulces petalos',
    short_name: 'Dulces petalos',
    description: 'Dulces petalos',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#111111',
    lang: 'en',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}

