import {
  DEFAULT_SITE_URL,
  SITE,
  legacyImage,
  siteAbsoluteUrl,
} from "@/lib/site-config";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${DEFAULT_SITE_URL}/#business`,
    name: SITE.legalName,
    alternateName: SITE.name,
    description: SITE.description,
    url: DEFAULT_SITE_URL,
    telephone: SITE.phoneTel,
    email: SITE.email,
    image: siteAbsoluteUrl(legacyImage("logo.png")),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.hqCity,
      addressRegion: SITE.state,
      addressCountry: "US",
    },
    areaServed: SITE.counties.map((c) => ({
      "@type": "AdministrativeArea",
      name: c,
    })),
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
