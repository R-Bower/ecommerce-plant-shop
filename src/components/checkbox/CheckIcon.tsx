import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function CheckIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      id={"Layer_2"}
      viewBox={"0 0 480.52 369.33"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g>
        <path
          d={
            "M143.85,364.02L5.31,225.48c-7.08-7.08-7.08-18.55,0-25.63l27.35-27.35c7.08-7.08,18.55-7.08,25.63,0l98.38,98.38L422.23,5.31c7.08-7.08,18.55-7.08,25.63,0l27.35,27.35c7.08,7.08,7.08,18.55,0,25.63L169.48,364.02c-7.08,7.08-18.55,7.08-25.63,0Z"
          }
          fill={"currentColor"}
        />
      </g>
    </svg>
  )
}
