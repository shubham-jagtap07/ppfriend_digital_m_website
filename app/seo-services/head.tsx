export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Leadzoro",
      "url": "https://www.leadzoro.com"
    },
    "areaServed": "IN",
    "serviceType": "SEO",
    "url": "https://www.leadzoro.com/seo-services",
    "description": "Best SEO Services in Pune & India — On-page, off-page and local SEO."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
