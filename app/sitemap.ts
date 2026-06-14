import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dibiznesssolutions.com'
  
  // Define all service pages
  const servicePages = [
    'meta-ads-services',
    'google-ads-services', 
    'seo-services',
    'website-development-services',
    'social-media-management-services',
    'gmb-optimization-services'
  ]
  
  // Define other important pages
  const staticPages = [
    '',  // homepage
    'about',
    'contact-us',
    'pricing',
    'blog'
  ]
  
  // Generate sitemap entries for static pages
  const staticEntries = staticPages.map((page) => ({
    url: `${baseUrl}${page ? `/${page}` : ''}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' as const : 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
  
  // Generate sitemap entries for service pages
  const serviceEntries = servicePages.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority for service pages
  }))
  
  return [
    ...staticEntries,
    ...serviceEntries,
  ]
}
