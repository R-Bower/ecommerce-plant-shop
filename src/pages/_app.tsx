import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {AppProps} from "next/app"
import React from "react"

import "../styles/global.css"

import {Layout} from "~components/layout"

interface Props extends AppProps {}

const queryClient = new QueryClient()

// TODO: providers
export default function App({Component, pageProps}: Props): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
