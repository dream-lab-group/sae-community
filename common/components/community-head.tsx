import Head from 'next/head';

export const CommunityHead = () => {
  return (
    <Head>
      <title>SAI Plattform</title>
      <meta name="author" content="Hadrian Chio" />
      <meta
        name="description"
        content="SAI Platform is a project platform designed for an interdisciplinary bachelor project at SAE Institute Zurich where students can share and react to each others projects."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/public/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/public/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/public/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/public/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};
