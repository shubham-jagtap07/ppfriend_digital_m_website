export default function Head() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Services",
    "provider": {
      "@type": "Organization",
      "name": "Leadzoro",
      "url": "https://www.leadzoro.com"
    },
    "areaServed": "IN",
    "serviceType": "PPC, Search Ads, Shopping Ads, YouTube Ads",
    "url": "https://www.leadzoro.com/google-ads-services",
    "description": "ROI-focused PPC campaigns for businesses in India & Pune."
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
