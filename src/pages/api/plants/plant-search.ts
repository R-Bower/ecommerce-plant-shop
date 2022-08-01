import type {NextApiRequest, NextApiResponse} from "next"

import {
  filterPlants,
  getPlantFilters,
  PlantDto,
  plantSearchRequestSchema,
} from "~api/plants"

import plantData from "./data/plants.json"

// @ts-ignore
const plants: PlantDto[] = plantData.plants

const originalFilters = getPlantFilters(plants)

export default async function plantSearch(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const parsedInput = plantSearchRequestSchema.safeParse(req.body)
  if (!parsedInput.success) {
    return res.status(400).json({message: "Call failed due to malformed input"})
  }

  const {filters, searchText = ""} = parsedInput.data

  const filteredPlants = filterPlants(filters, searchText, plants)

  return res.status(200).json({
    filters: {
      enabledValues: getPlantFilters(filteredPlants).enabledValues,
      filters: originalFilters.filters,
    },
    numberFound: 0,
    plants: filteredPlants,
  })
}
