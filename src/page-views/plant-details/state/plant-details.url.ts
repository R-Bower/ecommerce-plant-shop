import {ParsedQs} from "qs"
import {z} from "zod"

import {PlantPotId, PlantSizeId} from "~api/plants"
import {plantDetailsRoute} from "~lib/routes"
import {parseUrlSearch} from "~lib/url"

import {PlantDetailsUrlState} from "../types"

// Transforms the current search state into a url with query parameters.
export function serializePlantDetailsUrl(
  {plantSize, plantVariant}: PlantDetailsUrlState,
  plantId: string,
): string {
  const baseUrl = plantDetailsRoute.getPath(plantId)
  const urlSegments: string[] = []

  if (plantSize) {
    urlSegments.push(`size=${plantSize}`)
  }

  if (plantVariant) {
    urlSegments.push(`variant=${plantVariant}`)
  }

  return urlSegments.length === 0
    ? baseUrl
    : `${baseUrl}?${urlSegments.join("&")}`
}

// deserializes a URL's location.search parameters and returns the sanitized URL
// state from the result.
export function deserializePlantDetailsUrl(url: string): PlantDetailsUrlState {
  const {size, variant}: ParsedQs = parseUrlSearch(url)

  const plantSize = z.nativeEnum(PlantSizeId).safeParse(size)
  const plantVariant = z.nativeEnum(PlantPotId).safeParse(variant)

  return {
    plantSize: plantSize.success ? plantSize.data : undefined,
    plantVariant: plantVariant.success ? plantVariant.data : undefined,
  }
}
