import type {NextApiRequest, NextApiResponse} from "next"

import {getPlantFilters, PlantDto} from "~api/plants"

import plantData from "./data/all-plants.json"

// @ts-ignore
const plants: PlantDto[] = plantData.plants

const originalFilters = getPlantFilters(plants)

export default async function plantSearch(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  console.debug(req.body)

  return res.status(200).json({
    filters: {
      enabledValues: getPlantFilters(plants).enabledValues,
      filters: originalFilters.filters,
    },
    numberFound: 0,
    plants,
  })
}
