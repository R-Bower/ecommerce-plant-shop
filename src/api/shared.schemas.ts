import {z} from "zod"

export const filterGroupSchema = z.object({
  id: z.string(),
  label: z.string(),
  values: z.array(z.string()),
})

export type FilterGroupDto = z.infer<typeof filterGroupSchema>

export const enabledFilterValuesSchema = z.record(z.record(z.boolean()))

export type EnabledFilterValuesDto = z.infer<typeof enabledFilterValuesSchema>

export const searchFilterSchema = z.object({
  id: z.string(),
  label: z.string(),
  values: z.array(z.string()),
})

export type SearchFilterDto = z.infer<typeof searchFilterSchema>
