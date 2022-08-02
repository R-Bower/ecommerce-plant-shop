import {useRecoilValue} from "recoil"

import {PlantDto, PlantPotId, PlantSizeId} from "~api/plants"

import {plantPotState, plantSizeState} from "../state"

interface HookResult {
  activePot?: PlantPotId
  activeSize?: PlantSizeId
  imgSrc: string
  price: string
}

// utility function for returning the currently active size, pot, and price
export function useActivePlantStats({variant, variants}: PlantDto): HookResult {
  const size = useRecoilValue(plantSizeState)
  const pot = useRecoilValue(plantPotState)

  const planters = variants[0]?.planters

  // data collection
  function getActiveSize(): PlantSizeId | undefined {
    if (size) {
      return size
    }
    if (!planters) {
      return
    }
    return variants[0].sizeId
  }

  const plantSize = getActiveSize()

  function getActiveVariant(): PlantPotId | undefined {
    if (pot) {
      return pot
    }
    if (variant) {
      return
    }
    if (plantSize) {
      const targetVariant = variants.find((variant) => {
        if (variant.planters) {
          return variant.sizeId === plantSize
        } else {
          return false
        }
      })
      if (!targetVariant) {
        return
      }
    }
    if (!pot && planters?.length) {
      return planters[0].planterId
    }
  }

  const plantPot = getActiveVariant()

  function getImageAndPrice(): [string, string] {
    if (variant) {
      return [variant.imgSrc, variant.price]
    }

    const targetPlanter = plantPot
      ? planters.find((planter) => planter.planterId === plantPot)
      : planters[0]

    if (targetPlanter) {
      return [targetPlanter.imgSrc ?? "", targetPlanter.price]
    }

    return ["", ""]
  }

  const [imgSrc, price] = getImageAndPrice()

  return {
    activePot: plantPot,
    activeSize: plantSize,
    imgSrc: imgSrc ? `/images/plants/${imgSrc}` : "",
    price,
  }
}
