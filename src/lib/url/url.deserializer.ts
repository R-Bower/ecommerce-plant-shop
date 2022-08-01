import {parse, ParsedQs} from "qs"
import {toPairs} from "rambda"

import {UrlFilterState} from "~api/plants"

export type ParsedQueryString = string | string[] | ParsedQs | ParsedQs[]

export const getUrlSearch = (url: string): string => {
  const searchIndex = url.indexOf("?")
  return searchIndex > -1 ? url.substring(searchIndex) : ""
}

/*
 * Parses the location.search from a URL, if it exists, and omits the ? symbol.
 */

export const parseLocationSearch = (search: string): ParsedQs => {
  return parse(search, {
    comma: true,
    delimiter: "&",
    ignoreQueryPrefix: true,
    parseArrays: true,
  })
}

export const parseUrlSearch = (url: string) => {
  return parseLocationSearch(getUrlSearch(url))
}

export function deserializeStringParam(param: ParsedQueryString): string {
  return typeof param === "string" ? param : ""
}

export function deserializePage(page: string | string[] | undefined): number {
  return parseInt(deserializeStringParam(`${page || 1}`)) - 1
}

export function deserializeFiltersParam(
  param: ParsedQueryString,
): [string, string | string[]][] {
  // sanitize
  if (typeof param !== "object" || Array.isArray(param)) {
    return []
  }

  return toPairs(param as unknown as string[])
}

/*
 * A function that transforms the URL's query parameters into the format
 * expected by the frontend, while ignoring unrecognized ids.
 */
export function deserializeUrlFilters(
  filters: ParsedQs,
  supportedFilters: UrlFilterState,
): UrlFilterState {
  const sanitizedFilters = deserializeFiltersParam(filters)

  return sanitizedFilters.reduce(
    (acc: UrlFilterState, [key, value]) => {
      if (!acc[key]) {
        acc[key] = {}
      }

      console.debug([key, value])
      if (typeof value === "string") {
        acc[key] = {...acc[key], [value]: true}
      } else if (Array.isArray(value)) {
        value.forEach((val: string) => {
          acc[key] = {...acc[key], [val]: true}
        })
      }

      return acc
    },
    {...supportedFilters},
  )
}
