/* eslint-disable react/no-deprecated */

import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { Heading } from '../components/commons/Heading'
import { Pane } from '../components/commons/Pane'

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
          <Pane>
            <Pane justifyContent="center" alignItems="center" display="flex" marginTop={100}>
              <Heading color="#bbb">Página não encontrada</Heading>
            </Pane>
            <section className="error-container">
              <Heading size={900} color="#e27b7e">{this.props.errorCode}</Heading>
            </section>
            <Pane justifyContent="center" alignItems="center" display="flex">
              <Link href="/">
                <a href="home" className='home-link'>Página Inicial</a>
              </Link>
            </Pane>
            <style jsx global>
              {`
                html, body {
                  height: 100%;
                  overflow: hidden;
                  background-color: #FDFAF5;
                }
              `}
            </style>
            <style jsx>
              {`
              
              .error-container {
                text-align: center;
                font-size: 106px;
                font-weight: 800;
                margin: 70px 15px;
                color: #e27b7e;
              }
              .screen-reader-text {
                  color: #e27b7e;
                  font-size: 21vh;
              } 
              .not-found {
                  font-family: 'Montserrat', Helvetica, sans-serif;
                  color: #bbb;
                  text-align: center;
                  margin: 30px 15px;
              }
              .zoom-area { 
                max-width: 490px;
                margin: 30px auto 30px;
                font-size: 19px;
                text-align: center;
              }
              a.home-link {
                text-transform: uppercase;
                font-size: 13px;
                background-color: #de7e85;
                padding: 10px 15px;
                border-radius: 0;
                color: #fff;
                display: inline-block;
                margin-right: 5px;
                margin-bottom: 5px;
                line-height: 1.5;
                text-decoration: none;
                margin-top: 50px;
                letter-spacing: 1px;
                border-radius: 0.5rem;
              }
            `}
            </style>
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