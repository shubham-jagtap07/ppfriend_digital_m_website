import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GMB Optimization Services in India & Pune | Google My Business SEO - DiBiznesSolutions',
  description: 'DiBiznesSolutions helps businesses across India & Pune optimize Google Business Profiles for higher map rankings. GMB SEO, setup & content strategies for visibility.',
  keywords: 'Google My Business Optimization India, GMB Optimization Services India, Google Business Profile SEO India, Google Maps Listing Optimization India, Local SEO Services India, Optimize Google Business Listing India, GMB SEO Expert India, Google Business Listing Services India, Google My Business Services in Pune, GMB Optimization in Pune, Google Business Profile SEO Pune, Local SEO Services in Pune, GMB SEO Expert Pune, Google Maps Optimization Service Pune, Google Listing Management Pune, GMB Ranking Services Pune, Affordable Google My Business Services for Small Business India, GMB Optimization for Clinics & Salons in Pune, How to rank Google Business Profile in India, Top GMB SEO Service Providers in Pune, Google Map Pack Optimization Service India, Google Business Profile Setup & Verification Pune, Google Business Profile Content Strategy India',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'GMB Optimization Services in India & Pune | Google My Business SEO - DiBiznesSolutions',
    description: 'Rank higher on Google Maps! DiBiznesSolutions offers GMB optimization services, profile setup, and content strategies for local visibility in India & Pune.',
    url: 'https://www.dibiznesssolutions.com/gmb-optimization-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/gmb-optimization-og.png',
        width: 1200,
        height: 630,
        alt: 'GMB SEO & Google My Business Optimization Services by DiBiznesSolutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google My Business SEO Services India & Pune | DiBiznesSolutions',
    description: 'Affordable GMB optimization, map pack ranking & profile setup for small businesses in India & Pune by DiBiznesSolutions.',
    images: ['https://www.dibiznesssolutions.com/assets/gmb-optimization-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/gmb-optimization-services',
  },
};

export default function GMBOptimizationServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}