import React from 'react'
import { NextAuth } from 'next-auth/client'
import Layout from './layout'

export default class extends React.Component {
  
  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req}),// Add this.props.session to all pages
      lang: 'pt-br' // Add a lang property to all pages for accessibility
    }
  }
  
  message(headerMsg, msg) {
    return (
      <Layout {...this.props} navmenu={false}>
        <div className="text-center pt-5 pb-5">
          <h1 className="display-4 mb-5">{headerMsg}</h1>
          <p className="lead">{msg}</p>
        </div>
      </Layout>
    )
  }
}