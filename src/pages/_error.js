/* eslint-disable react/no-deprecated */
import React from 'react';
import Router, { withRouter } from 'next/router';

import { Button } from '../components/commons/Button';
import { Heading } from '../components/commons/Heading';
import { Pane } from '../components/commons/Pane';

class ErrorPage extends React.Component {
  static propTypes() {
    return {
      errorCode: React.PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired
    };
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr ? xhr.status : null;
    return { errorCode };
  }

  handleBack() {
    Router.push('/login');
  }

  render() {
    let response;
    switch (this.props.errorCode) {
      case 200:
      case 404:
        response = (
          <Pane
            background="#f5f5f5"
            height="100vh"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading size={800} color="#425A70">
              Página não encontrada
            </Heading>

            <Heading
              size={700}
              color="#EC4C47"
              marginTop={20}
              marginBottom={100}
            >
              {this.props.errorCode}
            </Heading>

            <Button
              appearance="primary"
              height={35}
              width={200}
              justifyContent="center"
              isLoading={false}
              onClick={this.handleBack}
            >
              PÁGINA INICIAL
            </Button>
          </Pane>
        );
        break;
      case 500:
        response = (
          <div>
            <h1 className="display-4">Internal Server Error</h1>
            <p>An internal server error occurred.</p>
          </div>
        );
        break;
      default:
        response = (
          <div>
            <h1 className="display-4">
              HTTP
              {this.props.errorCode} Error
            </h1>
            <p>
              An
              <strong>
                HTTP
                {this.props.errorCode}
              </strong>{' '}
              error occurred while trying to access
              <strong>{this.props.router.pathname}</strong>
            </p>
          </div>
        );
    }

    return response;
  }
}

export default withRouter(ErrorPage);
