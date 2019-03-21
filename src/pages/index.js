import React from 'react'
import Page from '../components/page'
import Layout from '../components/layout'


export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <div>Index.js</div>
      </Layout>
    )
  }
}