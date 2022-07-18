import {range} from "rambda"

export type Space =
  | -8
  | -7
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 68
  | 72
  | 76
  | 80
  | 84
  | 88
  | 92
  | 96

// Generates pixel values between 8px and 96px in increments of 4.
// Also generates -8px through 8px in increments of 1px (negative and small
// margins for one-off adjustments).  Anything outside these bounds can
// be customized on a per-case basis using the style utility.
export const space: Space[] = [
  ...(range(0, 8)
    .map((value) => [value, `-${value}`])
    .flat() as Space[]),
  ...(range(8, 100).filter((num) => num % 4 === 0) as Space[]),
]

// 0 through 32px, in increments of 4px
export const leftTopRightBottom = range(0, 32)
  .filter((value) => value % 4 === 0)
  .map((value) => `${value}px`)
