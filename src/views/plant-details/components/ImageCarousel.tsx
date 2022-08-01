import clsx from "clsx"
import React from "react"

import {PlantDto} from "~api/plants"
import {sx} from "~styles/sx.css"

interface Props {
  plant: PlantDto
}

export function ImageCarousel({...props}: Props): React.ReactElement {
  return (
    <div id={"image-carousel-pane"}>
      <div
        className={clsx(
          sx({
            display: ["none", "none", "none", "flex"],
          }),
        )}
        id={"image-slider-wrapper"}
      ></div>
    </div>
  )
}
