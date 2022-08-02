import clsx from "clsx"
import Image from "next/image"
import NextLink from "next/link"
import React from "react"
import {useRecoilValue} from "recoil"

import {PlantDto, PlantFilterId} from "~api/plants"
import {PetFriendlyPawIcon} from "~components/icons"
import {Link} from "~components/link"
import {plantDetailsRoute} from "~lib/routes"
import {font} from "~styles/font.css"
import {sx} from "~styles/sx.css"

import {getPlantFilterValuesById} from "../state"
import {
  plantCardViewNowStyle,
  plantImageWrapperStyle,
  plantLinkStyle,
  viewNowTextStyle,
} from "./PlantCard.css"

interface Props {
  plant: PlantDto
}

function getPlantDetailsUrl(id: string, size?: string[]): string {
  const baseUrl = plantDetailsRoute.getPath ? plantDetailsRoute.getPath(id) : ""
  return size?.length ? `${baseUrl}?size=${size[0]}` : baseUrl
}

export function PlantCard({
  plant: {id, metadata, title, variant, variants},
}: Props): React.ReactElement {
  const lowestPrice = variant ? variant.price : variants[0].planters[0].price

  const petFriendly =
    (metadata.length
      ? metadata.find((item) => item.id === "pet-safe")?.value
      : "No") === "Yes"

  const imgSrc = variant ? variant.imgSrc : variants[0]?.planters?.[0]?.imgSrc

  const sizeFilterValues = useRecoilValue(
    getPlantFilterValuesById(PlantFilterId.Size),
  )

  const plantLink = getPlantDetailsUrl(id, sizeFilterValues)

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
        <Link href={plantLink}>
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
        </Link>
        <NextLink className={clsx(plantLinkStyle)} href={plantLink}>
          <h5
            className={clsx(
              sx({
                cursor: "pointer",
              }),
            )}
          >
            {title}
          </h5>
        </NextLink>
      </div>
      {/* Price and pet indicators */}
      <div>
        <div
          className={clsx(
            sx({
              alignItems: "flex-end",
              borderBottom: "1px solid",
              borderBottomColor: "border",
              display: "flex",
              gap: 4,
              pb: 2,
            }),
          )}
        >
          <span className={clsx(font({variant: "subtitle"}))}>From</span>
          <span className={clsx(font({variant: "body"}))}>
            {`${lowestPrice}`}
          </span>
        </div>

        <div
          className={clsx(
            sx({
              alignItems: "center",
              display: "flex",
              gap: 6,
              height: 23,
              justifyContent: "flex-start",
            }),
          )}
        >
          {petFriendly ? (
            <>
              <PetFriendlyPawIcon height={12} width={12} />
              <span
                className={clsx(
                  sx({
                    mt: 1,
                  }),
                  font({
                    variant: "subtitle",
                  }),
                )}
              >
                Pet Friendly
              </span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}
