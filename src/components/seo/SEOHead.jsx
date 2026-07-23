import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  children,
}) => {
  const baseUrl = 'https://alkhobarmovers.com';
  const fullTitle = title
    ? `${title} | Al Khobar Movers`
    : 'Al Khobar Movers | Professional Moving & Shifting Services in Saudi Arabia';
  const defaultDescription =
    'Al Khobar Movers provides premium moving and shifting services across Saudi Arabia. House shifting, office relocation, furniture moving, packing & unpacking. Available 24/7.';
  const defaultKeywords =
    'movers al khobar, shifting services, house moving saudi arabia, office relocation, furniture moving, packing services, dammam movers, riyadh movers';
  const defaultImage = `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage || defaultImage} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      <meta property="og:site_name" content="Al Khobar Movers" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {children}
    </Helmet>
  );
};

export default SEOHead;
