import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from 'components/header';
import Footer from 'components/footer';

import style from './style.module.css';

const Page = ({ header, footer, children, className, ...rest }) => {
  const title = 'GamesVault';
  const description = 'WEB3 app';
  const url = 'gamesvault.co';
  const image = `${url}/preview.png`;

  return (
    <div className={`${style.page} ${className}`} {...rest}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@afk_mario" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:description" content={description} />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="page">
        {header ? <Header /> : null}
        <main>{children}</main>
        {footer ? <Footer /> : null}
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.bool,
  footer: PropTypes.bool,
  css: PropTypes.shape({}),
};

Page.defaultProps = {
  className: null,
  header: true,
  footer: true,
  children: null,
  css: null,
};

export default Page;
