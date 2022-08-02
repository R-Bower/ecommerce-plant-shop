import clsx from "clsx"
import Image from "next/image"
import React from "react"

import {PlantDto} from "~api/plants"
import {Media} from "~components/media/media"

import {imagePaneWrapperStyle, imageStyle} from "./ImagePane.css"

interface Props {
  imgSrc: string
  plant: PlantDto
}

export function ImagePane({imgSrc, plant: {title}}: Props): React.ReactElement {
  return (
    <div className={clsx(imagePaneWrapperStyle)} id={"image-pane-wrapper"}>
      {imgSrc ? (
        <>
          <Media lessThan={"laptop"}>
            <Image
              alt={title}
              className={clsx(imageStyle)}
              height={"100%"}
              layout={"responsive"}
              objectFit={"cover"}
              src={imgSrc}
              width={"100%"}
            />
          </Media>
          <Media greaterThanOrEqual={"laptop"}>
            <Image
              alt={title}
              className={clsx(imageStyle)}
              layout={"fill"}
              objectFit={"cover"}
              src={imgSrc}
            />
          </Media>
        </>
      ) : null}
    </div>
  )
}
