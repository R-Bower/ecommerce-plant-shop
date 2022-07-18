import {Options} from "ky"

export const kyOpts: Options = {
  retry: 1,
  timeout: 30000,
}
