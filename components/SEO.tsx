import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://courses.knowgrow.tech/logo.png', // Fallback logo
}) => {
  const siteName = 'KnowGrow';
  const fullTitle = title ? `${title} | ${siteName}` : 'KnowGrow - Learn Programming & Web Development';
  const url = typeof window !== 'undefined' ? window.location.href : 'https://courses.knowgrow.tech';
  const finalCanonical = canonical || url.split('?')[0].split('#')[0];

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
