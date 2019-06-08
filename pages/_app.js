import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

import logo from '../static/images/logo.ico';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Restaurante Popular</title>

          <link rel="icon" href={logo} type="image/png" />
        </Head>
        <Component {...pageProps} />

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
