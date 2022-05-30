import React from 'react'
import ReactDOMServer from 'react-dom/server'
import "../index.css";
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'routeParams']

async function render(pageContext) {
  const sheet = new ServerStyleSheet();
  const { Page, pageProps, routeParams } = pageContext
  const pageHtml = ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}><Page {...pageProps} {...routeParams} /></StyleSheetManager>
  )
    
  const styleTags = sheet.getStyleTags()
  
  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Open Sauced'
    
  const documentHtml = escapeInject`
    <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="The path to your next open-source contribution." />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="alternate icon" href="/favicon.ico" type="image/png" sizes="16x16" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="mask-icon" href="/favicon.svg" color="#FFFFFF" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="theme-color" content="#FFFFFF" />

      <meta property="dcterms:modified" content="<%= date %>" />

      <!-- For facebook, linkedin etc -->
      <meta property="og:title" content="<%= title %>" />
      <meta property="og:url" content="https://app.opensauced.pizza" />
      <meta property="og:type" content="article" />
      <meta
        property="og:description"
        content="Open Sauced provides structured onboarding for new contributors to open source. This structure provides a way to track your next contributions by leveraging a unique dashboard built on top of the GitHub GraphQL API."
      />
      <meta property="og:image" content="/social-card.png" />

      <!-- for twitter -->
      <meta property="twitter:title" content="Open Sauced" />
      <meta property="twitter:url" content="https://app.opensauced.pizza" />
      <meta property="twitter:type" content="article" />

      <meta
        property="twitter:description"
        content="Open Sauced is a platform to gain insights on open source contributors and their contributions."
      />
      <meta property="twitter:image" content="/social-card.png" />

      <meta name="theme-color" content="#FFFFFF" />
      ${dangerouslySkipEscape(styleTags)}
      <title>${title}</title>
      </head>
      <body>
      <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `
    
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}

export { render }