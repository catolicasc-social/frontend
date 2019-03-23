import { Component } from 'react';
import { NextAuth } from 'next-auth/client';
import Page from '../layouts/page';

export default class extends Component {
  static async getInitialProps({ req }) {
    return {
      session: await NextAuth.init({ req }),
      lang: 'pt-br'
    };
  }

  render() {
    return (
      <Page>
        <h1>index</h1>
      </Page>
    );
  }
}
