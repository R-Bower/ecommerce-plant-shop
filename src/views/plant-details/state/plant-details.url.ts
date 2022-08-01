import {ParsedQs} from "qs"
import {z} from "zod"

import {PlantSizeId, PlantVariantId} from "~api/plants"
import {parseUrlSearch} from "~lib/url"

import {PlantDetailsUrlState} from "../types"

// Transforms the current search state into a url with query parameters.
export function serializePlantDetailsUrl({
  plantSize,
  plantVariant,
}: PlantDetailsUrlState): string {
  const urlSegments: string[] = []

  if (plantSize) {
    urlSegments.push(`size=${plantSize}`)
  }

  if (plantVariant) {
    urlSegments.push(`variant=${plantVariant}`)
  }

  return urlSegments.length === 0 ? "" : `?${urlSegments.join("&")}`
}

// deserializes a URL's location.search parameters and returns the sanitized URL
// state from the result.
export function deserializePlantDetailsUrl(url: string): PlantDetailsUrlState {
  const {size, variant}: ParsedQs = parseUrlSearch(url)

  const plantSize = z.nativeEnum(PlantSizeId).safeParse(size)
  const plantVariant = z.nativeEnum(PlantVariantId).safeParse(variant)

  return {
    plantSize: plantSize.success ? plantSize.data : undefined,
    plantVariant: plantVariant.success ? plantVariant.data : undefined,
  }
}
