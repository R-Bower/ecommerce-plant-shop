import clsx from "clsx"
import React from "react"

import {
  contentPaddingY,
  siteContentWrapper,
  sitePaddingX,
} from "~styles/common.css"
import {sx} from "~styles/sx.css"

export default function HomePage(): React.ReactElement {
  return (
    <section
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
        }),
        sitePaddingX,
        siteContentWrapper,
        contentPaddingY,
      )}
    >
      <div
        className={sx({
          display: "flex",
          flex: 1,
          justifyContent: ["center", "center", "flex-start"],
        })}
      >
        <h2>All Plants</h2>
      </div>
    </section>
  )
}
