/* eslint-disable react/no-deprecated */

import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

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

  render() {
    let response;
    switch (this.props.errorCode) {
      case 200:
      case 404:
        response = (
          <div>
            <h1 className="display-4">Page Not Found</h1>
            <p>
              The page
              <strong>{this.props.router.pathname}</strong> does not exist.
            </p>
            <p>
              <Link href="/">
                <a href="home">Home</a>
              </Link>
            </p>
          </div>
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
