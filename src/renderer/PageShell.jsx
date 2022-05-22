import React, {useContext} from 'react'
//import { PageContextProvider } from './usePageContext'

const Context = React.createContext()

function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

export function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}

export function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}





