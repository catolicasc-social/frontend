import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
// import { NextAuth } from 'next-auth/client';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  /* static async getInitialProps({ req }) {
    return {
      session: await NextAuth.init({ req }),
      lang: 'pt-br'
    };
  } */

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Restaurante Popular</title>

          <link rel="icon" href="/static/logo.png" type="image/png" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
