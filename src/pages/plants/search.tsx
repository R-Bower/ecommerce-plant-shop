import clsx from "clsx"
import React from "react"
import {RecoilRoot} from "recoil"

import {
  contentPaddingY,
  siteContentWrapper,
  sitePaddingX,
} from "~styles/common.css"
import {sx} from "~styles/sx.css"

import {
  deserializePlantSearchUrl,
  plantSearchUrlState,
  PlantSearchView,
} from "../../views/plant-search"

export default function HomePage(): React.ReactElement {
  return (
    <RecoilRoot
      initializeState={({set}) => {
        if (typeof window !== "undefined") {
          const urlState = deserializePlantSearchUrl(window.location.search)
          set(plantSearchUrlState, urlState)
        }
      }}
    >
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
