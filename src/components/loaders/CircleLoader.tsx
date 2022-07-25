import clsx from "clsx"
import React from "react"

import {
  CircleLoaderColor,
  CircleLoaderSize,
  circleLoaderStyle,
} from "./CircleLoader.css"

interface Props {
  className?: string
  color?: CircleLoaderColor
  size?: CircleLoaderSize
}

export function CircleLoader({
  className,
  color,
  size,
}: Props): React.ReactElement {
  return <span className={clsx(circleLoaderStyle({color, size}), className)} />
}
