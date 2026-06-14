import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const revalidate = 86400; // Revalidate every 24 hours for ISR

export const metadata: Metadata = {
  title: 'Meta Ads Services in Pune & India | DiBiznesSolutions',
  description: 'DiBiznesSolutions offers ROI-driven Meta Ads services for Facebook & Instagram marketing. Grow your brand across Pune and India with targeted campaigns.',
  keywords: 'Meta Ads Services, Facebook Advertising Agency, Instagram Marketing Services, Social Media Advertising Company, Best Facebook Ads Agency in India, Top Instagram Ads Services in Pune, Meta Ads Services in Pune, Facebook Ads Agency Pune, Instagram Marketing Pune, Social Media Advertising Pune, Meta Ads Expert India, Facebook Advertising Company India, Affordable Meta Ads Services for Small Businesses, E-commerce Facebook Advertising Experts, Lead Generation through Instagram Ads, Performance Marketing Agency for Meta Platforms, Customized Facebook Ad Campaigns India',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Meta Ads Services in Pune & India | DiBiznesSolutions',
    description: 'Launch powerful Facebook & Instagram ad campaigns with DiBiznesSolutions\'s Meta Ads Services. Boost your growth in Pune and across India today.',
    url: 'https://www.dibiznesssolutions.com/meta-ads-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/meta-ads-og.png',
        width: 1200,
        height: 630,
        alt: 'Meta Ads Services by DiBiznesSolutions - Facebook & Instagram Marketing Agency India',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Services in Pune & India | DiBiznesSolutions',
    description: 'Run high-converting Meta Ads campaigns across Pune and India with DiBiznesSolutions\'s expert Facebook and Instagram marketing team.',
    images: ['https://www.dibiznesssolutions.com/assets/meta-ads-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/meta-ads-services',
  },
};

export default function MetaAdsServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
