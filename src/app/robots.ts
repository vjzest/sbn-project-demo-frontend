import { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
  let robotsContent = 'User-agent: *\nAllow: /'
  
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (apiUrl && apiUrl.startsWith('http')) {
      const res = await fetch(`${apiUrl}/settings/robots_txt`, { next: { revalidate: 3600 } })
      if (res.ok) {
      const data = await res.json()
      if (data?.success) {
        robotsContent = data.data.value
      }
    }
    }
  } catch (error) {
    console.warn('Failed to fetch robots.txt settings:', error)
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      }
    ],
    sitemap: 'https://www.sbnhealthcaresolution.com/sitemap.xml',
  }
}
