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

          <link
            as={"font"}
            crossOrigin={""}
            href={"/fonts/AvenirNextLTPro-Regular.otf"}
            type={"font/otf"}
          />

          <link
            as={"font"}
            crossOrigin={""}
            href={"/fonts/AvenirNextLTPro-Bold.otf"}
            type={"font/otf"}
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
