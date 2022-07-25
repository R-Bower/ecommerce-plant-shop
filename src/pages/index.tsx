import clsx from "clsx"
import React from "react"
import {RecoilRoot} from "recoil"

import {
  contentPaddingY,
  siteContentWrapper,
  sitePaddingX,
} from "~styles/common.css"
import {sx} from "~styles/sx.css"

import {PlantSearchView} from "../views/plant-search"

export default function HomePage(): React.ReactElement {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  )
}
