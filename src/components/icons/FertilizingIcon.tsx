import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function FertilizingIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      data-name={"Layer 1"}
      version={"1.1"}
      viewBox={"0 0 27.77 25"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g>
        <path
          d={
            "M15.88,17.35a10.9,10.9,0,0,1-2.09-.18.37.37,0,1,1,.15-.73c.05,0,5.09,1,8.86-2.22,3-2.58,4.44-7.11,4.21-13.45-1.75.12-9.26.9-12.5,5.19a8.39,8.39,0,0,0-1.17,7.39.37.37,0,0,1-.72.18,9.1,9.1,0,0,1,1.3-8C17.8.38,27,0,27.35,0a.36.36,0,0,1,.38.36C28,7.14,26.54,12,23.27,14.79A11.29,11.29,0,0,1,15.88,17.35Z"
          }
        ></path>
        <path
          d={
            "M7.64,18.26a5.42,5.42,0,0,1-3.23-1C-.09,14,0,4.25,0,3.83a.35.35,0,0,1,.38-.36c9.79.1,9.9,9,9.9,9.08a.38.38,0,0,1-.37.37h0a.37.37,0,0,1-.37-.37c0-.33-.12-8-8.79-8.33C.78,6,1.13,14,4.85,16.64a5.48,5.48,0,0,0,5.26.41.37.37,0,1,1,.24.7A8.12,8.12,0,0,1,7.64,18.26Z"
          }
        ></path>
        <path
          d={
            "M11,19.06a.36.36,0,0,1-.35-.25C9,14.5,4.45,10.29,4.41,10.25A.37.37,0,0,1,4.9,9.7c.2.18,4.78,4.37,6.41,8.86a.38.38,0,0,1-.23.48Z"
          }
        ></path>
        <path
          d={
            "M10.55,25a.38.38,0,0,1-.37-.36c-.57-14.15,12-19.7,12.11-19.76a.37.37,0,0,1,.48.2.36.36,0,0,1-.19.48c-.12.06-12.2,5.42-11.65,19.05a.39.39,0,0,1-.36.39Z"
          }
        ></path>
      </g>
    </svg>
  )
}
