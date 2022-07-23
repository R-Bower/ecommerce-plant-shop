import {z} from "zod"

export const filterOptionSchema = z.object({
  id: z.string(),
  values: z.array(z.string()),
})

export type FilterOptionDto = z.infer<typeof filterOptionSchema>
