import ReactDOM from 'react-dom'
import React from 'react'
//import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { getPage } from 'vite-plugin-ssr/client'

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage()
  const { Page, pageProps, routeParams} = pageContext
  ReactDOM.hydrate(
    <Page {...pageProps} {...routeParams} />,
    //document.getElementById('page-view'),
    document.getElementById('root'),
  )
}

hydrate()