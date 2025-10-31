import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'What if Internet Ends - Digital Survival Guide',
    short_name: 'Internet Ends',
    description: 'Complete guide to preparing for internet apocalypse. Download Wikipedia offline, essential software, and survival resources.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
