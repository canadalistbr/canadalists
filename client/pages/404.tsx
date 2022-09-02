import Head from 'next/head'
import Router from 'next/router'

import type { NextPage } from 'next'
const NotFoundPage: NextPage = () => {
  function loadHomepage() {
    Router.push('/')
  }

  return (
    <>
      <Head>
        <title>
          404 page
        </title>
      </Head>
      <header>
        <h1>Sorry, page not found.</h1>
        <button onClick={loadHomepage}>Homepage</button>
      </header>
    </>
  )
}

export default NotFoundPage
