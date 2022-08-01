import {atom, DefaultValue, selector} from "recoil"

import {PlantSizeId, PlantVariantId} from "~api/plants"
import {updateReasonAtom} from "~lib/url"

import {PlantDetailsUrlState} from "../types"

export const plantSizeAtom = atom<PlantSizeId | undefined>({
  default: undefined,
  key: "plantSizeAtom",
})

export const plantSizeState = selector<PlantSizeId | undefined>({
  get: ({get}) => {
    return get(plantSizeAtom)
  },
  key: "plantSizeState",
  set: ({set}, newValue) => {
    set(plantSizeAtom, newValue)
    set(updateReasonAtom, "changed")
  },
})

export const plantVariantAtom = atom<PlantVariantId | undefined>({
  default: undefined,
  key: "plantVariantAtom",
})

export const plantVariantState = selector<PlantVariantId | undefined>({
  get: ({get}) => {
    return get(plantVariantAtom)
  },
  key: "plantVariantState",
  set: ({set}, newValue) => {
    set(plantVariantAtom, newValue)
    set(updateReasonAtom, "changed")
  },
})

export const plantDetailsUrlState = selector<PlantDetailsUrlState>({
  get: ({get}) => {
    return {
      plantSize: get(plantSizeAtom),
      plantVariant: get(plantVariantAtom),
    }
  },
  key: "plantDetailsUrlState",
  set: ({set}, urlState) => {
    if (urlState instanceof DefaultValue) {
      // resetting isn't allowed with this selector
      return
    }
    set(plantSizeAtom, urlState.plantSize)
    set(plantVariantAtom, urlState.plantVariant)
  },
})
