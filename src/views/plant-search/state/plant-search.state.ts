import {atom, DefaultValue, selector} from "recoil"

export type ActiveFilters = Record<string, Record<string, boolean>>

const defaultActiveFilters: ActiveFilters = {}

Object.freeze(defaultActiveFilters)

export const activeFiltersAtom = atom<ActiveFilters>({
  default: {},
  key: "activeFiltersAtom",
})

export const toggleActiveFilter = selector<{
  active: boolean
  id: string
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
  },
})
