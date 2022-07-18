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
            rel={"preload"}
            type={"font/otf"}
          />

          <link
            as={"font"}
            crossOrigin={""}
            href={"/fonts/AvenirNextLTPro-Bold.otf"}
            rel={"preload"}
            type={"font/otf"}
          />

          {/* @ts-ignore */}
          <style global jsx>
            {`
              @font-face {
                font-family: "Avenir Next";
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url("/fonts/AvenirNextLTPro-Regular.otf")
                  format("opentype");
              }
              @font-face {
                font-family: "Avenir Next";
                font-style: normal;
                font-weight: 500;
                font-display: swap;
                src: url("/fonts/AvenirNextLTPro-Bold.otf") format("opentype");
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
