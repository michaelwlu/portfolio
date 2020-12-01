import Head from 'next/head';
import React from 'react';

const Meta = () => {
  const defaultInfo = {
    title: 'Michael W. Lu',
    desc: 'Self-taught programmer. Full stack web development.',
    img: 'banner.png', // don't include slash
    url: (process.env.WEB_URL || '').replace(/\/$/, ''), // regex to remove possible slash at end
    favicon: 'favicon.png',
    apple: 'favicon.png',
  };

  return (
    <Head>
      <title>{defaultInfo.title}</title>
      <meta name="description" content={defaultInfo.desc} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={defaultInfo.title} />
      <meta
        name="og:description"
        property="og:description"
        content={defaultInfo.desc}
      />
      <meta property="og:site_name" content={`${defaultInfo.title}`} />
      <meta property="og:url" content={`${defaultInfo.url}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={defaultInfo.title} />
      <meta name="twitter:description" content={defaultInfo.desc} />
      <link rel="canonical" href={`${defaultInfo.url}`} />
      <link rel="icon" type="image/png" href={`${defaultInfo.favicon}`} />
      <link rel="apple-touch-icon" href={`${defaultInfo.apple}`} />
      <meta
        property="og:image"
        content={`${defaultInfo.url}/${defaultInfo.img}`}
      />
      <meta
        property="twitter:image"
        content={`${defaultInfo.url}/${defaultInfo.img}`}
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, viewport-fit=cover, user-scalable=no"
      />
    </Head>
  );
};

export default Meta;
