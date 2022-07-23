import clsx from "clsx"
import React from "react"

import {
  contentPaddingY,
  siteContentWrapper,
  sitePaddingX,
} from "~styles/common.css"
import {sx} from "~styles/sx.css"

import {PlantSearchView} from "../views/PlantSearchView"

export default function HomePage(): React.ReactElement {
  return (
    <section
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
          gap: 16,
        }),
        sitePaddingX,
        siteContentWrapper,
        contentPaddingY,
      )}
    >
      <PlantSearchView />
    </section>
  )
}
