import clsx from "clsx"
import Image from "next/image"
import React from "react"

import {PlantDto} from "~api/plants"
import {bodyFont} from "~styles/body-font.css"
import {sx} from "~styles/sx.css"

import {
  plantCardViewNowStyle,
  plantImageWrapperStyle,
  viewNowTextStyle,
} from "./PlantCard.css"

interface Props {
  plant: PlantDto
}

export function PlantCard({
  plant: {metadata, title, variants},
}: Props): React.ReactElement {
  const variant = variants[0] ?? {}

  const lowestPrice = variants[0]?.imgSrc
    ? variants[0].price
    : variants[0]?.planters?.[0]?.price

  const petFriendly =
    (metadata.length
      ? metadata.find((item) => item.id === "pet-safe")?.value
      : "No") === "Yes"

  const imgSrc = variant.imgSrc || variant.planters?.[0]?.imgSrc

  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 8,
          height: "100%",
          justifyContent: "space-between",
          maxWidth: 300,
        }),
      )}
    >
      <div
        className={clsx(
          sx({
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }),
        )}
      >
        <div className={clsx(plantImageWrapperStyle)}>
          {imgSrc ? (
            <Image
              height={300}
              layout={"responsive"}
              src={`/images/plants/${imgSrc}`}
              width={250}
            />
          ) : null}
          <div
            className={clsx(
              plantCardViewNowStyle,
              sx({
                alignItems: "center",
                display: "flex",
                flex: 1,
                justifyContent: "center",
              }),
            )}
          >
            <p className={viewNowTextStyle}>View Now</p>
          </div>
        </div>
        <h5>{title}</h5>
      </div>
      <div
        className={clsx(
          sx({
            alignItems: "flex-end",
            borderBottom: "1px solid",
            borderBottomColor: "border",
            display: "flex",
            gap: 4,
            mt: 16,
            pb: 2,
          }),
        )}
      >
        <span className={clsx(bodyFont({variant: "subtitle"}))}>From</span>
        <span className={clsx(bodyFont({variant: "body"}))}>
          {`${lowestPrice}`}
        </span>
      </div>
    </div>
  )
}
