import { Component } from 'react';
import Head from 'next/head';
import { NextAuth } from 'next-auth/client';

import Content from './content';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {
      session: await NextAuth.init({ req }),
      lang: 'pt-br'
    };
  }

  render() {
    const { children, title } = this.props;

    return (
      <>
        <Head>
          <title>Restaurante Popular</title>

          <link rel="icon" href="../static/logo.png" type="image/png" />
        </Head>
        <Content title={title}>{children}</Content>
      </>
    );
  }
}
