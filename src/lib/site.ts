export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jade-tools-web.vercel.app";

export const SITE_NAME = "Toolbox";

export interface ToolFaq {
  q: string;
  a: string;
}

export function toolJsonLd(opts: {
  name: string;
  path: string;
  description: string;
  faqs: ToolFaq[];
}) {
  const pageUrl = `${SITE_URL}${opts.path}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: opts.name,
      url: pageUrl,
      description: opts.description,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: opts.name, item: pageUrl },
      ],
    },
  ];
}
