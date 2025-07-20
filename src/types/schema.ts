/**
 * Schema JSON-LD para SEO do template Next.js
 * Baseado na estrutura de dados em @/data
 */

import { siteConfig } from '@/data/config';

// ============================================================================
// SCHEMA PRINCIPAL - ORGANIZATION
// ============================================================================

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.siteName,
    "description": siteConfig.siteDescription,
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/images/logo.png`,
    "image": `${siteConfig.siteUrl}/images/og-default.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.whatsapp,
        "contactType": "customer service",
        "contactOption": "TollFree",
        "availableLanguage": "Portuguese"
      }
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.twitter,
      siteConfig.social.tiktok
    ].filter(url => url && url.trim() !== ''),
    "openingHours": [
      `Mo-Fr ${siteConfig.contact.workingHours.weekdays}`,
      `Sa ${siteConfig.contact.workingHours.weekends}`
    ],
    "priceRange": "$$",
    "areaServed": "Brasil",
    "serviceArea": {
      "@type": "Country",
      "name": "Brasil"
    }
  };
}

// ============================================================================
// SCHEMA PARA PÁGINA INICIAL
// ============================================================================

export function getHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.siteName,
    "description": siteConfig.siteDescription,
    "url": siteConfig.siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.siteUrl}/busca?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/images/logo.png`
      }
    }
  };
}

// ============================================================================
// SCHEMA PARA SERVIÇOS/PRODUTOS
// ============================================================================

export function getServiceSchema(service: {
  name: string;
  description: string;
  price?: number;
  image?: string;
  url: string;
  category?: string;
  features?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "image": service.image || `${siteConfig.siteUrl}/images/services/default.jpg`,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "url": siteConfig.siteUrl
    },
    "serviceType": service.category || "Marketing Digital",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Marketing Digital",
      "itemListElement": service.features?.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature
        }
      })) || []
    },
    ...(service.price && {
      "offers": {
        "@type": "Offer",
        "price": service.price,
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      }
    })
  };
}

// ============================================================================
// SCHEMA PARA ARTIGOS DO BLOG
// ============================================================================

export function getArticleSchema(article: {
  title: string;
  description: string;
  content: string;
  image: string;
  url: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "url": article.url,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.siteUrl}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "articleSection": article.category || "Marketing Digital",
    "keywords": article.tags?.join(", ") || "marketing digital, SEO, design",
    "wordCount": article.content.split(' ').length
  };
}

// ============================================================================
// SCHEMA PARA PÁGINA DE CONTATO
// ============================================================================

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato",
    "description": "Entre em contato conosco para transformar sua presença digital",
    "url": `${siteConfig.siteUrl}/contato`,
    "mainEntity": {
      "@type": "Organization",
      "name": siteConfig.siteName,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "availableLanguage": "Portuguese"
        },
        {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.whatsapp,
          "contactType": "customer service",
          "contactOption": "TollFree",
          "availableLanguage": "Portuguese"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.zipCode,
        "addressCountry": siteConfig.contact.address.country
      }
    }
  };
}

// ============================================================================
// SCHEMA PARA DEPOIMENTOS
// ============================================================================

export function getReviewSchema(review: {
  name: string;
  company?: string;
  content: string;
  rating: number;
  date: string;
  source: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": siteConfig.siteName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": review.name,
      ...(review.company && {
        "worksFor": {
          "@type": "Organization",
          "name": review.company
        }
      })
    },
    "reviewBody": review.content,
    "datePublished": review.date,
    "publisher": {
      "@type": "Organization",
      "name": review.source
    }
  };
}

// ============================================================================
// SCHEMA PARA FAQ
// ============================================================================

export function getFAQSchema(faqs: Array<{
  question: string;
  answer: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// ============================================================================
// SCHEMA PARA BREADCRUMB
// ============================================================================

export function getBreadcrumbSchema(items: Array<{
  name: string;
  url: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// ============================================================================
// SCHEMA PARA LOCAL BUSINESS
// ============================================================================

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.siteName,
    "description": siteConfig.siteDescription,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.zipCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505, // Coordenadas de São Paulo (exemplo)
      "longitude": -46.6333
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    }
  };
}

// ============================================================================
// SCHEMA PARA WEBSITE NAVIGATION
// ============================================================================

export function getWebsiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteConfig.siteUrl}/busca?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ContactAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteConfig.siteUrl}/contato`
        }
      }
    ]
  };
}

// ============================================================================
// FUNÇÃO PRINCIPAL PARA GERAR SCHEMA
// ============================================================================

export function generatePageSchema(page: string, customData?: any) {
  const schemas = [];

  // Schema base da organização
  schemas.push(getOrganizationSchema());

  // Schema específico da página
  switch (page) {
    case 'home':
      schemas.push(getHomePageSchema());
      break;
    case 'contact':
      schemas.push(getContactPageSchema());
      break;
    case 'service':
      if (customData?.service) {
        schemas.push(getServiceSchema(customData.service));
      }
      break;
    case 'article':
      if (customData?.article) {
        schemas.push(getArticleSchema(customData.article));
      }
      break;
    case 'local-business':
      schemas.push(getLocalBusinessSchema());
      break;
  }

  // Schema de navegação
  schemas.push(getWebsiteNavigationSchema());

  // Schema de breadcrumb se fornecido
  if (customData?.breadcrumbs) {
    schemas.push(getBreadcrumbSchema(customData.breadcrumbs));
  }

  // Schema de FAQ se fornecido
  if (customData?.faqs) {
    schemas.push(getFAQSchema(customData.faqs));
  }

  // Schema de reviews se fornecido
  if (customData?.reviews) {
    customData.reviews.forEach((review: any) => {
      schemas.push(getReviewSchema(review));
    });
  }

  return schemas;
}

// ============================================================================
// FUNÇÃO PARA RENDERIZAR SCHEMA NO HTML
// ============================================================================

export function renderSchemaScript(schemas: any[]) {
  return schemas.map(schema => 
    `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`
  ).join('\n');
} 