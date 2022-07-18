import kyBase from "ky-universal"
import {z} from "zod"

import {kyOpts} from "../shared"
import {PlantDto, plantSchema} from "./plants.schemas"

const ky = kyBase.extend({
  ...kyOpts,
  prefixUrl: "/plants",
})

export const PlantsApi = {
  plantById: async (id: string): Promise<PlantDto[]> => {
    const result = await ky.post(`plant-by-id`, {json: id}).json()
    const parsed = z.array(plantSchema).safeParse(result)
    if (!parsed.success) {
      throw new Error("Data validation failed")
    }
    return parsed.data
  },
  // TODO: determine filter data format
  plantFilters: async (id: string): Promise<any> => {},
}
