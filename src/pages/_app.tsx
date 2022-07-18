import {AppProps} from "next/app"
import React from "react"

import "../styles/global.css"

import {Layout} from "../components/layout"

interface Props extends AppProps {}

// TODO: providers
export default function App({Component, pageProps}: Props): React.ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
