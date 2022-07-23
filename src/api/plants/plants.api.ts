import kyBase from "ky-universal"

import {kyOpts} from "../shared.constants"
import {PlantSearchInputDto} from "./plant.types"
import {
  PlantDto,
  plantSchema,
  PlantSearchResponseDto,
  plantSearchResponseSchema,
} from "./plants.schemas"

const ky = kyBase.extend({
  ...kyOpts,
  prefixUrl: "/api/plants",
})

export const PlantsApi = {
  plantById: async (id: string): Promise<PlantDto> => {
    const result = await ky
      .post(`plant-by-id`, {
        json: id,
      })
      .json()
    const parsed = plantSchema.safeParse(result)
    if (!parsed.success) {
      throw new Error("Data validation failed")
    }
    return parsed.data
  },
  plantSearch: async (
    input: PlantSearchInputDto,
  ): Promise<PlantSearchResponseDto> => {
    const result = await ky
      .post(`plant-search`, {
        json: input,
      })
      .json()
    const parsed = plantSearchResponseSchema.safeParse(result)
    if (!parsed.success) {
      throw new Error("Data validation failed")
    }
    return parsed.data
  },
}
