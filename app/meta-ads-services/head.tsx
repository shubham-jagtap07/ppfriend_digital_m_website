export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Ads Services",
    "provider": {
      "@type": "Organization",
      "name": "Leadzoro",
      "url": "https://www.leadzoro.com"
    },
    "areaServed": "IN",
    "serviceType": "Facebook Ads, Instagram Ads",
    "url": "https://www.leadzoro.com/meta-ads-services",
    "description": "ROI-driven Meta Ads services for Facebook & Instagram marketing."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
