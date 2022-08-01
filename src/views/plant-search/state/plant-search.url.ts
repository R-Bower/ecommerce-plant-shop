import {ParsedQs} from "qs"

import {
  buildUrlFilters,
  deserializePage,
  deserializeStringParam,
  deserializeUrlFilters,
  parseUrlSearch,
} from "~lib/url"

import {PlantSearchUrlState} from "../types"
import {defaultPlantSearchFilters} from "./plant-search.state"

// Transforms the current search state into a url with query parameters.
export function serializePlantSearchUrl(url: PlantSearchUrlState): string {
  const urlSegments: string[] = []

  if (url.page) {
    urlSegments.push(`page=${url.page}`)
  }

  if (url.searchText) {
    urlSegments.push(`searchText=${url.searchText}`)
  }

  urlSegments.push(...buildUrlFilters(url.activeFilters))

  return urlSegments.length === 0 ? "" : `?${urlSegments.join("&")}`
}

export function deserializePlantSearchUrl(url: string): PlantSearchUrlState {
  const {page, searchText = "", ...filters}: ParsedQs = parseUrlSearch(url)

  return {
    activeFilters: deserializeUrlFilters(filters, defaultPlantSearchFilters),
    page: deserializePage(page as string | undefined),
    searchText: deserializeStringParam(searchText),
  }
}
