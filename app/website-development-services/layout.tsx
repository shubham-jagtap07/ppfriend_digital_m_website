import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Website Development Services in India & Pune | DiBiznesSolutions',
  description: 'DiBiznesSolutions builds SEO-optimized, high-converting websites for startups & businesses. Top website development company in India & Pune for custom design.',
  keywords: 'Website Development Services India, Website Development Company in Pune, Website Development Company in India, Custom Website Design Company in Pune, Web Development Services India, Website Design Agency India, Web Design & Development Pune, Website Development for Startups India, SEO-Optimized Website Development India, Responsive Website Development India',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Website Development Services in India & Pune | DiBiznesSolutions',
    description: 'Custom websites crafted by DiBiznesSolutions for Indian startups, service providers & businesses in Pune. SEO-optimized, scalable, responsive design included.',
    url: 'https://www.dibiznesssolutions.com/website-development-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/website-development-og.png',
        width: 1200,
        height: 630,
        alt: 'DiBiznesSolutions Website Development Services - Custom Web Design Agency in India',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development in India & Pune | DiBiznesSolutions',
    description: 'From business websites to e-commerce, DiBiznesSolutions builds responsive and SEO-friendly websites across Pune and India.',
    images: ['https://www.dibiznesssolutions.com/assets/website-development-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/website-development-services',
  },
}

export default function WebsiteDevelopmentServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}