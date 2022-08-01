import clsx from "clsx"
import Image from "next/image"
import React from "react"
import {useRecoilValue} from "recoil"

import {PlantDto} from "~api/plants"
import {Media} from "~components/media/media"

import {plantSizeAtom, plantVariantAtom} from "../state"
import {imagePaneWrapperStyle, imageStyle} from "./ImagePane.css"

interface Props {
  plant: PlantDto
}

export function ImagePane({plant}: Props): React.ReactElement {
  const size = useRecoilValue(plantSizeAtom)
  const variant = useRecoilValue(plantVariantAtom)

  const variants = plant.variants
  let imgSrc: string | undefined
  if (!size && !variant) {
    imgSrc = variants[0].imgSrc
      ? variants[0].imgSrc
      : variants[0]?.planters?.[0].imgSrc
  }

  const src = imgSrc ? `/images/plants/${imgSrc}` : ""

  return (
    <div className={clsx(imagePaneWrapperStyle)} id={"image-pane-wrapper"}>
      {src ? (
        <>
          <Media lessThan={"laptop"}>
            <Image
              alt={plant.title}
              className={clsx(imageStyle)}
              height={"100%"}
              layout={"responsive"}
              objectFit={"cover"}
              src={src}
              width={"100%"}
            />
          </Media>
          <Media greaterThanOrEqual={"laptop"}>
            <Image
              alt={plant.title}
              className={clsx(imageStyle)}
              layout={"fill"}
              objectFit={"cover"}
              src={src}
            />
          </Media>
        </>
      ) : null}
    </div>
  )
}
