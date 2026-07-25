import { Helmet } from 'react-helmet-async';

export const LocalBusinessJsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Al Khobar Movers',
    description:
      'Professional moving and shifting services across Saudi Arabia. House shifting, office relocation, furniture moving, packing & unpacking.',
    url: 'https://alkhobarmovers.com',
    telephone: '+966508155432',
    email: 'akhter90khan@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Al Khobar',
      addressRegion: 'Eastern Province',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.2774242,
      longitude: 50.2079656,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Al Khobar' },
      { '@type': 'City', name: 'Dammam' },
      { '@type': 'City', name: 'Riyadh' },
      { '@type': 'City', name: 'Jubail' },
      { '@type': 'City', name: 'Al Hofuf' },
      { '@type': 'City', name: 'Ras Tanura' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const BreadcrumbJsonLd = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://alkhobarmovers.com${item.path}`,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const OrganizationJsonLd = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Al Khobar Movers',
    url: 'https://alkhobarmovers.com',
    logo: 'https://alkhobarmovers.com/favicon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966508155432',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic', 'Urdu'],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const FAQPageJsonLd = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const ServiceJsonLd = ({ serviceName, description, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'MovingCompany',
      name: 'Al Khobar Movers',
    },
    url: url || 'https://alkhobarmovers.com',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const WebPageJsonLd = ({ title, description, url, type = 'WebPage' }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description: description,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'Al Khobar Movers',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
