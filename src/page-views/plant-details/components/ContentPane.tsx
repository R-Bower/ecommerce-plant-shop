import clsx from "clsx"
import React from "react"
import {useSetRecoilState} from "recoil"

import {PlantDto, PlantPotId, PlantSizeId} from "~api/plants"
import {
  BasketsPotIcon,
  CeramicPotIcon,
  EcoPotIcon,
  GrowerPotIcon,
} from "~components/icons"
import {Link} from "~components/link"
import {sx} from "~styles/sx.css"

import {plantPotState, plantSizeState} from "../state"
import {ButtonListOption} from "../types"
import {contentPaneRootStyle} from "./ContentPane.css"
import {AddToCartControls, ButtonList} from "./controls"

interface Props {
  activePot?: PlantPotId
  activeSize?: PlantSizeId
  plant: PlantDto
  price: string
}

const planterIcons: Record<PlantPotId, React.ElementType> = {
  grower: GrowerPotIcon,
  "planter-ceramic": CeramicPotIcon,
  "planter-eco-planter": EcoPotIcon,
  "planter-naturals-basket": BasketsPotIcon,
}

export function ContentPane({
  activePot,
  activeSize,
  plant: {title, variants = [], variant},
  price,
}: Props): React.ReactElement {
  const setSize = useSetRecoilState(plantSizeState)
  const setPot = useSetRecoilState(plantPotState)

  function getOptions(): [ButtonListOption[], ButtonListOption[]] {
    const pots: ButtonListOption[] = []
    const sizes: ButtonListOption[] = []
    if (variant) {
      return [pots, sizes]
    }
    if (activePot) {
      const availableVariants = variants.filter((variant) => {
        return variant.planters.some(
          (planter) => planter.planterId === activePot,
        )
      })
      console.debug(availableVariants)
    }
    if (activeSize) {
      const planterSize = variants.find(
        (variant) => variant.sizeId === activeSize,
      )
      if (!planterSize) {
        return [pots, sizes]
      }
      planterSize.planters.forEach((planter) => {
        pots.push({
          icon: planterIcons[planter.planterId],
          id: planter.planterId,
          label: planter.planterLabel,
        })
      })
    }

    return [pots, sizes]
  }

  const [potOptions, sizeOptions] = getOptions()

  React.useEffect(() => {
    console.debug("pots", potOptions)
    console.debug("sizes", sizeOptions)
  }, [potOptions, sizeOptions])

  const onSizeOptionSelected = React.useCallback(
    (option: ButtonListOption) => {
      setSize(option.id as PlantSizeId)
    },
    [setSize],
  )

  const onPotOptionSelected = React.useCallback(
    (option: ButtonListOption) => {
      setPot(option.id as PlantPotId)
    },
    [setPot],
  )

  return (
    <section
      className={clsx(
        contentPaneRootStyle,
        sx({
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }),
      )}
    >
      <Link href={"/plants/search"}>
        <span
          className={clsx(
            sx({
              color: "primaryLight",
              cursor: "pointer",
              textDecoration: "none",
            }),
          )}
        >
          All Plants
        </span>
      </Link>

      <h2
        className={clsx(
          sx({
            display: "inline-flex",
          }),
        )}
      >
        {title}
      </h2>
      <div>
        <h4
          className={clsx(
            sx({
              color: "primaryMain",
            }),
          )}
        >
          {price}
        </h4>
      </div>

      <div
        className={clsx(
          sx({
            backgroundColor: "secondaryMain",
            display: "flex",
            flex: 1,
            height: 3,
            maxHeight: 3,
            my: 16,
            width: "100%",
          }),
        )}
      >
        <br />
      </div>
      <ButtonList
        activeOptionId={activeSize ?? ""}
        onOptionSelected={onSizeOptionSelected}
        options={sizeOptions}
      />
      <ButtonList
        activeOptionId={activePot ?? ""}
        onOptionSelected={onPotOptionSelected}
        options={potOptions}
      />
      <AddToCartControls />
    </section>
  )
}
