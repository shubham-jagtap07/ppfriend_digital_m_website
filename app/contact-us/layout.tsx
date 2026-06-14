import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | DiBiznesSolutions - Best Marketing Agency in Pune & India',
  description: 'Get in touch with DiBiznesSolutions – India\'s trusted digital marketing agency offering SEO, Ads, Website & GMB solutions. 7-day moneyback guarantee included.',
  keywords: 'Contact digital marketing agency Pune, Best marketing agency India contact, SEO agency Pune contact, Google Ads help India, DiBiznesSolutions contact number, DiBiznesSolutions email, Digital growth partner Pune, 7-day moneyback digital marketing, WhatsApp marketing support India, GMB SEO expert India',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Contact DiBiznesSolutions – India\'s Top Digital Marketing Agency',
    description: 'Start your digital journey with DiBiznesSolutions. Get expert SEO, Ads & Website services with 7-day risk-free guarantee. Contact us today.',
    url: 'https://www.dibiznesssolutions.com/contact-us',
    type: 'website',
    images: [
      {
        url: 'https://www.dibiznesssolutions.com/assets/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact DiBiznesSolutions - Digital Marketing Agency India',
        type: 'image/png',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/contact-us',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}