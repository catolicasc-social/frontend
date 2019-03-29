import { Component } from 'react';
import { NextAuth } from 'next-auth/client';

import Page from '../layouts/page';

import Input from '../components/commons/Input';
import SearchInput from '../components/commons/SearchInput';
import { Alert } from '../components/commons/Alert';
import { Heading } from '../components/commons/Heading';
import { Text } from '../components/commons/Text';
import { Button } from '../components/commons/Button';
import { FilePicker } from '../components/commons/Filepicker';
import { Spinner } from '../components/commons/Spinner';

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
        <div className="div-centered">
          <Text>This is my Text tag (span)</Text>
        </div>
        <Heading>This is my Heading tag (h2)</Heading>
        <div className="div-input">
          <Input placeholder="Input placeholder..." />
        </div>
        <div className="div-input">
          <SearchInput placeholder="SearchInput placeholder..." />
        </div>
        <div className="div-input">
          <FilePicker multiple required marginBottom={5} width={250} />
        </div>
        <div>
          <Button
            appearance="primary"
            intent="success"
            onClick={() => <Alert title="Hello!" />}
          >
            Search
          </Button>
        </div>
        <div className="div-centered">
          <Spinner />
        </div>
    
        <style jsx>
          {`
            h2 {
              color: red;
              text-align: center;
            }

            .div-centered {
              display: flex;
              flex-direction: column;
              text-align: center;
            }

            .div-input {
              display: flex;
              flex-direction: column;
              margin: 5px auto;
            }
          `}
        </style>
      </Page>
    );
  }
}
