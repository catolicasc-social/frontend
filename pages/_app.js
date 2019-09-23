import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';

import logo from '../static/images/logo.ico';

Sentry.init({
  dsn: 'https://240293187c514562905394775ca91481@sentry.io/1449043'
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, err } = this.props;
    const modifiedPageProps = { ...pageProps, err };

    return (
      <Container>
        <Head>
          <title>Restaurante Popular</title>

          <link rel="icon" href={logo} type="image/png" />
        </Head>
        <Component {...modifiedPageProps} />

        <style jsx global>
          {`
            body {
              margin: 0;
              font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
              color: #fff;
            }
          `}
        </style>
      </Container>
    );
  }
}

export default MyApp;
