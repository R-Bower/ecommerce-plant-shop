import {sort, toPairs} from "rambda"

import {SearchFilterDto} from "../../shared.schemas"
import {PlantDto} from "../plants.schemas"

type EnabledFilterValues = Record<string, Record<string, boolean>>

const enabledFilters = new Set<string>([
  "pet-safe",
  "care-level",
  "Light",
  "Water",
  "Humidity",
  "Fertilizing",
  "Re-potting",
  "Cleaning",
])

const filterLabels: Record<string, string> = {
  "care-level": "Care Level",
  "pet-safe": "Pet Safe",
  size: "Size",
}

const filterSortOrder: Record<string, Record<string, number>> = {
  Cleaning: {
    __SIDEBAR: 8,
    "After bloom begins to die": 3,
    "As needed": 4,
    "Bi-annually": 2,
    Monthly: 1,
  },
  Fertilizing: {
    __SIDEBAR: 7,
    "Every two weeks": 2,
    "Every two years": 6,
    Monthly: 3,
    Seasonally: 4,
    Weekly: 1,
    Yearly: 5,
  },
  Humidity: {
    __SIDEBAR: 6,
    High: 3,
    Low: 1,
    Medium: 2,
  },
  Light: {__SIDEBAR: 4, High: 3, Low: 1, Medium: 2},
  "Re-potting": {
    "2 Years": 3,
    "3 Years": 4,
    "4 Years": 5,
    Rarely: 1,
    Yearly: 2,
  },
  Water: {__SIDEBAR: 5, High: 3, Low: 1, Medium: 2},
  "care-level": {
    __SIDEBAR: 3,
    "High Maintenance": 2,
    "I'm Easy": 1,
    "Plays Hard to Get": 3,
  },
  "pet-safe": {__SIDEBAR: 2, No: 2, Yes: 1},
}

/*
 * A function that constructs the available filters from the properties in each
 * plant from the parameters.  If a plant in the results has a property, the
 * filter will be enabled.  Otherwise, disabled.
 */
export function getPlantFilters(plants: PlantDto[]): {
  enabledValues: EnabledFilterValues
  filters: SearchFilterDto[]
} {
  const filterGroups: EnabledFilterValues = plants.reduce(
    (acc: EnabledFilterValues, {careGuide, metadata}: PlantDto) => {
      // the pet-safe field may not be present if the plant isn't pet-safe.
      // We account for this manually.
      let petSafe = false
      careGuide.forEach(({id, label, value}) => {
        if (!enabledFilters.has(id)) {
          return
        }
        if (!acc[id]) {
          acc[id] = {}
        }
        if (value.length) {
          acc[id][label] = true
        }
      })
      metadata.forEach(({id, value}) => {
        if (!enabledFilters.has(id)) {
          return
        }
        if (id === "pet-safe") {
          petSafe = value === "Yes"
          acc["pet-safe"] = {Yes: true}
        } else {
          if (!acc[id]) {
            acc[id] = {}
          }
          // this is an interface issue – the value field's type is always a
          // string.  TODO: update interface
          acc[id][value as string] = true
        }
      })

      if (!petSafe) {
        acc["pet-safe"]["No"] = true
      }
      return acc
    },
    {},
  )

  return {
    enabledValues: filterGroups,
    filters: toPairs(filterGroups)
      .map(([id, valueSet]) => {
        const values = sort((val1, val2) => {
          return filterSortOrder[id][val1] - filterSortOrder[id][val2]
        }, Object.keys(valueSet))
        return {
          id,
          label: filterLabels[id] || id,
          values,
        }
      })
      .sort((val1, val2) => {
        return (
          filterSortOrder[val1.id].__SIDEBAR -
          filterSortOrder[val2.id].__SIDEBAR
        )
      }),
  }
}
