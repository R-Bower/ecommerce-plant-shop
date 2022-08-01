import clsx from "clsx"
import React from "react"

import {Breakpoint} from "~styles/system/responsive"

import {
  atStyle,
  betweenStyle,
  greaterThanOrEqualStyle,
  lessThanStyle,
} from "./Media.css"

type SharedProps = {
  children: React.ReactNode
}

type Props = SharedProps &
  (
    | {
        at?: undefined
        between?: undefined
        greaterThanOrEqual?: undefined
        lessThan?: Breakpoint
      }
    | {
        at?: undefined
        between?: undefined
        greaterThanOrEqual?: Breakpoint
        lessThan?: undefined
      }
    | {
        at?: undefined
        between?:
          | ["mobile", "tablet"]
          | ["mobile", "laptop"]
          | ["mobile", "desktop"]
          | ["tablet", "laptop"]
          | ["tablet", "desktop"]
          | ["laptop", "desktop"]

        greaterThanOrEqual?: undefined
        lessThan?: undefined
      }
    | {
        at?: Breakpoint
        between?: undefined
        greaterThanOrEqual?: undefined
        lessThan?: undefined
      }
  )

/*
 * A media query component that hides/shows its children based on the current
 * breakpoint and the supplied props.  The current breakpoint is computed from
 * the browser's width.
 */
export function Media({
  at,
  between,
  children,
  greaterThanOrEqual,
  lessThan,
}: Props): React.ReactElement {
  return (
    <div
      className={clsx(
        between ? betweenStyle[between.join("-")] : null,
        greaterThanOrEqual ? greaterThanOrEqualStyle[greaterThanOrEqual] : null,
        lessThan ? lessThanStyle[lessThan] : null,
        at ? atStyle[at] : null,
      )}
    >
      {children}
    </div>
  )
}
