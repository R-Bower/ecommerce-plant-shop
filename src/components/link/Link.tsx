import NextLink, {LinkProps} from "next/link"
import React from "react"

interface Props extends LinkProps {
  children: React.ReactNode
}

export function Link({...props}: Props): React.ReactElement {
  return <NextLink {...props} />
}
