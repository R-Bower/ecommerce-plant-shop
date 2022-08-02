import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function MinusIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      aria-hidden={"true"}
      className={"icon-minus "}
      fill={"none"}
      focusable={"false"}
      role={"presentation"}
      viewBox={"0 0 10 2"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <path
        clipRule={"evenodd"}
        d={"M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"}
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  )
}
