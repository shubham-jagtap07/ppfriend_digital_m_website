import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Blog - Coming Soon | DiBiznesSolutions - Digital Marketing Insights',
  description: 'Stay tuned for expert digital marketing insights, SEO tips, and growth strategies from DiBiznesSolutions. Our blog is launching soon with valuable content for businesses.',
  keywords: 'Digital marketing blog, SEO tips, Marketing insights, Business growth strategies, DiBiznesSolutions blog, Coming soon',
  authors: [{ name: 'DiBiznesSolutions' }],
  robots: 'index, follow',
  icons: {
    icon: '/LeadZoroLogo.ico',
  },
  openGraph: {
    title: 'Blog Coming Soon | DiBiznesSolutions Digital Marketing Insights',
    description: 'Get ready for expert digital marketing insights and growth strategies. DiBiznesSolutions blog launching soon with valuable content for Indian businesses.',
    url: 'https://www.dibiznesssolutions.com/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.leadzoro.com/assets/blog-coming-soon-og.png',
        width: 1200,
        height: 630,
        alt: 'DiBiznesSolutions Blog Coming Soon - Digital Marketing Insights',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Coming Soon | DiBiznesSolutions Marketing Insights',
    description: 'Expert digital marketing tips and strategies coming soon. Stay tuned for valuable insights from DiBiznesSolutions.',
    images: ['https://www.dibiznesssolutions.com/assets/blog-coming-soon-og.png'],
  },
  alternates: {
    canonical: 'https://www.dibiznesssolutions.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
