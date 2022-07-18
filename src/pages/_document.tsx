import Document, {Head, Html, Main, NextScript} from "next/document"
import React from "react"

// TODO: fonts
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            content={process.env.NEXT_PUBLIC_APP_VERSION}
            name={"version"}
          />

          <meta content={"Ryan Bower"} name={"author"} />

          <link href={"https://fonts.googleapis.com"} rel={"preconnect"} />
          <link
            crossOrigin={""}
            href={"https://fonts.gstatic.com"}
            rel={"preconnect"}
          />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@300;400&display=swap"
            }
            rel={"stylesheet"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
