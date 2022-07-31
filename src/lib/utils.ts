export function ensureArray(value: string | string[]): string[] {
  return typeof value === "string" ? [value] : value
}
