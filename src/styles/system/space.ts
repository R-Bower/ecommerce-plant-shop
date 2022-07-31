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
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96

// Generates pixel values between 8px and 96px in increments of 8.
// Also generates -8px through 8px in increments of 1px (negative and small
// margins for one-off adjustments).  Anything outside these bounds can
// be customized on a per-case basis using the style utility.
export const systemSpace: Space[] = [
  -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 20, 24, 28,
  32, 36, 40, 48, 56, 64, 72, 80, 88, 96,
]

// 0 through 32px, in increments of 4px
export const leftTopRightBottom = [0, 4, 8, 12, 16, 20, 24, 28, 32]
