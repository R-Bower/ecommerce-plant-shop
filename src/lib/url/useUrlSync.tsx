import {useRouter} from "next/router"
import React from "react"
import {RecoilState, useRecoilState} from "recoil"

import {updateReasonAtom} from "./url.state"

export interface UseUrlSyncParams<T> {
  baseUrl: string
  deserializerFn: (url: string) => T
  recoilState: RecoilState<T>
  serializerFn: (state: T) => string
}

export function useUrlSync<T>({
  baseUrl,
  deserializerFn,
  recoilState,
  serializerFn,
}: UseUrlSyncParams<T>): void {
  const [urlState, setStateFromUrl] = useRecoilState<T>(recoilState)
  const [updateReason, setUpdateReason] = useRecoilState(updateReasonAtom)

  const router = useRouter()
  const pushed = React.useRef(true)

  /*
   * URL deserializer.
   * Populates state from the url on browser back/forward.
   */
  React.useEffect(() => {
    function onRouteChangeComplete(url: string) {
      /*
       * We respond to the URL change for every action EXCEPT when the user
       * triggers a state change that writes to the URL.  We avoid
       * deserialization here because the URL is already in sync with the state,
       * as the serializer function has just run.
       */
      if (!pushed.current) {
        /*
         * The deserialize function should accept a URL and respond to state
         * changes.  This function should function in isolation and not update
         * its dependencies when the state changes.
         */
        if (!url.startsWith(baseUrl)) {
          return
        }
        const urlState = deserializerFn(url)
        setStateFromUrl(urlState)
      }
      pushed.current = false
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete)
    return function cleanup() {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [baseUrl, deserializerFn, router.events, setStateFromUrl])

  /*
   * URL serializer.
   * Updates the URL when related pieces of state change.
   */
  React.useEffect(() => {
    /*
     * We prevent a route push unless the user triggers the state change.
     * This won't happen on first load or browser back/forward navigation.
     */
    if (updateReason === "changed") {
      /*
       * the serialize function will trigger this effect to fire if it changes.
       * This function should be a memoized callback that generates the URL
       * based on some state.
       */
      const url = serializerFn(urlState)

      pushed.current = true
      setUpdateReason("url")
      router.push(url, undefined, {shallow: true})
    }
  }, [router, serializerFn, setUpdateReason, updateReason, urlState])

  // after the first render, we set the ref to false
  React.useEffect(() => {
    pushed.current = false
  }, [])
}
