/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Head from 'next/head'
import Package from '../../package.json'

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{Package.description}</title>
        </Head>
        <div>
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}