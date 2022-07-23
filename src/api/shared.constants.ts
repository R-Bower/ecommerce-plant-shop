import {QueryObserverOptions} from "@tanstack/react-query"
import {Options} from "ky"

export const kyOpts: Options = {
  retry: 1,
  timeout: 30000,
}

export const queryOptions: QueryObserverOptions<any> = {
  keepPreviousData: true,
  refetchOnMount: false,
  refetchOnReconnect: true,
  refetchOnWindowFocus: false,
  retry: 1,
  staleTime: 300000,
}
