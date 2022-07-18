import {range} from "rambda"

type Flex =
  | "min-content"
  | "max-content"
  | "initial"
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12

export const flex: Flex[] = [
  "min-content",
  "max-content",
  "initial",
  ...(range(0, 13) as Flex[]),
]
