import * as React from 'react'
import defaultMetaImage from '../images/meta-lilly.png';
import favicon180x180 from '../images/favicon-180x180.svg';
import favicon32x32 from '../images/favicon-32x32.svg';
import favicon16x16 from '../images/favicon-16x16.svg';


const Seo = ({ title, description, metaImage }) => {
  const imageToUse = metaImage || defaultMetaImage; // Use passed metaImage or fallback to default

return (
  <>
    <title>Lilly Icon - {title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
    <meta property="og:image" content={imageToUse} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageToUse} />
    <link rel="icon" type="image/svg+xml" href={favicon32x32} />
    <link rel="apple-touch-icon" sizes="180x180" href={favicon180x180} />
    <link rel="icon" type="image/svg+xml" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/svg+xml" sizes="16x16" href={favicon16x16} />
  </>
)
}

export default Seo