import ReactDOM from 'react-dom'
import { getPage } from 'vite-plugin-ssr/client'

async function hydrate() {

  const pageContext = await getPage()
  const { Page, pageProps, routeParams} = pageContext
  ReactDOM.hydrate(
    <Page {...pageProps} {...routeParams} />,
    document.getElementById('root'),
  )
}

hydrate()