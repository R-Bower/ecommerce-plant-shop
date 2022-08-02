import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function PlusIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      focusable={"false"}
      role={"presentation"}
      viewBox={"0 0 16 16"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <path
        d={
          "M15.921 2.94a1.001 1.001 0 0 0 .003-1.416l-.187-.187a1 1 0 0 0-1.416.003l-5.69 5.69-5.69-5.69a1.001 1.001 0 0 0-1.417-.003l-.187.187A1 1 0 0 0 1.34 2.94l5.69 5.69-5.69 5.691a1.001 1.001 0 0 0-.003 1.416l.187.187a1 1 0 0 0 1.416-.003l5.69-5.69 5.691 5.69a1.001 1.001 0 0 0 1.416.003l.187-.187a1 1 0 0 0-.003-1.416l-5.69-5.69 5.69-5.69z"
        }
        fill={"currentColor"}
        id={"a"}
      ></path>
    </svg>
  )
}
