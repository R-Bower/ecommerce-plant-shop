import {EnabledFilters, UrlFilterState} from "~api/plants"

const amp = encodeURIComponent("&")
const comma = encodeURIComponent(",")
const minus = encodeURIComponent("-")
const plus = encodeURIComponent("+")

export function encodeUrlString(str: string): string {
  return str
    .replace(/&/g, amp)
    .replace(/,/g, comma)
    .replace(/-/g, minus)
    .replace(/\+/g, plus)
    .replace(/%20/g, "+")
    .replace(/ /g, "+")
}

export function buildUrlFilters(activeFilters: UrlFilterState): string[] {
  // for each filterGroup...
  return Object.keys(activeFilters)
    .sort()
    .reduce((acc: string[], groupId: string) => {
      // process the group's values...
      const filterRecord: EnabledFilters = activeFilters[groupId]
      const values = Object.keys(filterRecord)
        .sort()
        .filter((key: string) => Boolean(filterRecord[key]))
      // Groups without at least one active value are ignored.
      if (values.length) {
        // add each value to the groupId.  If multiple values, separate each value
        // with a comma.
        acc.push(
          `${encodeUrlString(groupId)}=${values
            .map((value) => encodeUrlString(value))
            .join(",")}`,
        )
      }

      return acc
    }, [])
}
