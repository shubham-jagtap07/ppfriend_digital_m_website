import type { Metadata } from 'next';

export const revalidate = 86400; // Revalidate every 24 hours for ISR

export const metadata: Metadata = {
  title: 'Google Ads Services in India & Pune | DiBiznesSolutions PPC Experts',
  description: 'DiBiznesSolutions is India\'s trusted Google Ads agency offering ROI-focused PPC, e-commerce campaigns, YouTube, Display & Search Ads. Book your expert now.',
  authors: [{ name: 'DiBiznesSolutions' }],
  keywords: 'Google Ads Services India, Best Google Ads Agency in India, Google Ads Services in Pune, PPC Company in Pune, Google Ads for E-commerce Stores India, Affordable Google Ads Services, Google Ads Management Company India, Google Ads Expert India, Local PPC for Pune Businesses, Real Estate Google Ads India, YouTube Ads, Display Ads, Search Ads, PPC Services India, Google Ads Consultant Pune, Certified Google Ads Expert in Pune, Google Lead Generation Services India, Google Ads Campaign Setup and Management India',
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Google Ads Services in India & Pune | DiBiznesSolutions PPC Experts',
    description: 'Drive revenue with ROI-focused Google Ads campaigns. DiBiznesSolutions offers expert PPC management for businesses in India & Pune.',
    url: 'https://www.dibiznesssolutions.com/google-ads-services',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/google-ads-og.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads & PPC Services by DiBiznesSolutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Services in India & Pune | DiBiznesSolutions',
    description: 'ROI-focused PPC campaigns for businesses in India & Pune. Expert Google Ads management by DiBiznesSolutions.',
    images: ['https://www.dibiznesssolutions.com/assets/google-ads-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/google-ads-services',
  },
};

export default function GoogleAdsServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}