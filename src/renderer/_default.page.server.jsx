import React from 'react'
import ReactDOMServer from 'react-dom/server'
//import { StaticRouter } from "react-router-dom";
import "../index.css";
import "react-loading-skeleton/dist/skeleton.css";


import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';


export { render }

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'routeParams']

async function render(pageContext) {
  const sheet = new ServerStyleSheet();
  console.log('calling _default server render')
  const { Page, pageProps, routeParams } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}><Page {...pageProps} {...routeParams} /></StyleSheetManager>
  )

  const styleTags = sheet.getStyleTags()

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + vite-plugin-ssr'

  // NOTE: Updated line 35 from page-view -> root
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        ${dangerouslySkipEscape(styleTags)}
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}