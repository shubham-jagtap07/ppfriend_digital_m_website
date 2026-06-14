import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const revalidate = 86400; // Revalidate every 24 hours for ISR

export const metadata: Metadata = {
  title: 'SEO Services in India & Pune | Best SEO Company - DiBiznesSolutions',
  description: 'Rank higher with DiBiznesSolutions – India\'s trusted SEO agency. Get affordable SEO services for startups, clinics, real estate & e-commerce across Pune & India.',
  keywords: 'SEO Services India, Best SEO Company India, SEO Expert India, Affordable SEO Services India, SEO Agency India, SEO Services for Small Business India, E-commerce SEO Services India, Local SEO Services India, On-Page SEO Services India, Off-Page SEO Services India, SEO Services in Pune, Best SEO Company in Pune, SEO Expert Pune, Affordable SEO Services Pune, Local SEO Services Pune, On-Page SEO Services Pune, Off-Page SEO Services Pune, SEO Consultant Pune, SEO Agency Pune, SEO Services for Small Business Pune, Affordable SEO Services for Small Businesses India, E-commerce SEO Services in Pune, Local SEO Services for Clinics in Pune, On-Page and Off-Page SEO Services India, SEO Services for Real Estate Companies in Pune',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'SEO Services in India & Pune | Best SEO Company - DiBiznesSolutions',
    description: 'From startups to real estate – DiBiznesSolutions offers local & national SEO services that get results. On-page, off-page & local SEO strategies in Pune & India.',
    url: 'https://www.dibiznesssolutions.com/seo-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/seo-services-og.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services by DiBiznesSolutions - India\'s Top SEO Company for Pune Businesses',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services India & Pune | Affordable SEO for Business - DiBiznesSolutions',
    description: 'DiBiznesSolutions offers powerful SEO solutions for businesses in Pune & India. E-commerce SEO, local SEO & content optimization by experts.',
    images: ['https://www.dibiznesssolutions.com/assets/seo-services-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/seo-services',
  },
};

export default function SEOServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
