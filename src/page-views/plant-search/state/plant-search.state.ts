import {atom, DefaultValue, selector, selectorFamily} from "recoil"

import {ActiveFilters, PlantFilterId, PlantFilterInputDto} from "~api/plants"
import {updateReasonAtom} from "~lib/url"

import {PlantSearchUrlState} from "../types"

export const pageAtom = atom<number>({
  default: 0,
  key: "pageAtom",
})

/*
 * Enhanced state that triggers a URL update when modified.
 */
export const pageState = selector<number>({
  get: ({get}) => {
    return get(pageAtom)
  },
  key: "pageState",
  set: ({set}, newValue) => {
    set(pageAtom, newValue)
    set(updateReasonAtom, "changed")
  },
})

export const searchTextAtom = atom<string>({
  default: "",
  key: "searchTextAtom",
})

export const defaultPlantSearchFilters: ActiveFilters = {
  [PlantFilterId.RePotting]: {},
  [PlantFilterId.Cleaning]: {},
  [PlantFilterId.Fertilizing]: {},
  [PlantFilterId.Humidity]: {},
  [PlantFilterId.Light]: {},
  [PlantFilterId.Water]: {},
  [PlantFilterId.CareLevel]: {},
  [PlantFilterId.PetSafe]: {},
  [PlantFilterId.Size]: {},
}

Object.freeze(defaultPlantSearchFilters)

export const activeFiltersAtom = atom<ActiveFilters>({
  default: defaultPlantSearchFilters,
  key: "activeFiltersAtom",
})

export const toggleActiveFilter = selector<{
  active: boolean
  id: PlantFilterId
  value: string
}>({
  get: () => {
    throw new Error(
      "Not a value getter – this selector is only used for setting state.",
    )
  },
  key: "toggleActiveFilter",
  set: ({get, set}, newValue) => {
    if (newValue instanceof DefaultValue) {
      throw new Error("Resetting this selector has no effect")
    }
    const {active, id, value} = newValue
    const activeFilters = get(activeFiltersAtom)

    const group = activeFilters[id]
    if (!group) {
      set(activeFiltersAtom, {...activeFilters, [id]: {[value]: active}})
    } else {
      set(activeFiltersAtom, {
        ...activeFilters,
        [id]: {...group, [value]: active},
      })
    }
    // reset the page whenever filters change to bring the user to the
    // top of the new search results
    set(pageAtom, 0)
    set(updateReasonAtom, "changed")
  },
})

export const getPlantFiltersInput = selector<PlantFilterInputDto[]>({
  get: ({get}) => {
    const activeFilters = get(activeFiltersAtom)
    return Object.keys(activeFilters)
      .sort()
      .map((id) => {
        const values = activeFilters[id as PlantFilterId]
        return {
          id: id as PlantFilterId,
          values: Object.keys(values).filter((key) => values[key]),
        }
      })
      .filter(({values}) => values.length)
  },
  key: "getPlantFiltersInput",
})

/*
 * Used by the URL de/serializers to retrieve and update the related pieces of
 * URL state.
 */
export const plantSearchUrlState = selector<PlantSearchUrlState>({
  get: ({get}) => {
    const page = get(pageAtom)
    const searchText = get(searchTextAtom)
    const activeFilters = get(activeFiltersAtom)
    return {
      activeFilters,
      page,
      searchText,
    }
  },
  key: "plantSearchUrlState",
  set: ({set}, urlState) => {
    if (urlState instanceof DefaultValue) {
      // resetting is not supported
      return
    }
    set(activeFiltersAtom, urlState.activeFilters as ActiveFilters)
    set(searchTextAtom, urlState.searchText)
    set(pageAtom, 0)
  },
})

export const getPlantFilterValuesById = selectorFamily<string[], PlantFilterId>(
  {
    get:
      (id: PlantFilterId) =>
      ({get}) => {
        const filters = get(activeFiltersAtom)
        const enabledFilterValues = filters[id]
        return Object.keys(enabledFilterValues)
          .sort()
          .filter((value) => enabledFilterValues[value])
      },
    key: "getPlantFilterValuesById",
  },
)
