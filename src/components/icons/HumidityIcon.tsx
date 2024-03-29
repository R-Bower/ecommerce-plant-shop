import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function HumidityIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      aria-hidden={"true"}
      className={"icon-drops "}
      focusable={"false"}
      role={"presentation"}
      viewBox={"0 0 19.58 25.02"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g>
        <path
          d={
            "M7.09,25h0C3.61,25,0,22.62,0,18.61,0,11.36,6.11,4.17,6.37,3.87a.34.34,0,0,1,.27-.13.43.43,0,0,1,.29.12c.26.28,6.35,6.94,6.35,14.59C13.28,23.3,10,25,7.09,25ZM6.66,4.69C5.46,6.2.75,12.5.75,18.61c0,3.54,3.22,5.66,6.34,5.66,2.51,0,5.44-1.52,5.44-5.82C12.53,12,7.87,6.12,6.66,4.69Z"
          }
        ></path>
        <path
          d={
            "M4.35,20a.37.37,0,0,1-.29-.14C1.5,16.7,4,13,4,12.94a.36.36,0,0,1,.52-.1.37.37,0,0,1,.1.52c-.09.13-2.22,3.31,0,6.06a.38.38,0,0,1,0,.53A.43.43,0,0,1,4.35,20Z"
          }
        ></path>
        <path
          d={
            "M13.63,22.08h0a.38.38,0,0,1-.37-.38.38.38,0,0,1,.38-.37h0a5.23,5.23,0,0,0,5-4.29c1.1-4.82-4.35-13.75-5.77-15.95L10,6.06a.38.38,0,0,1-.65-.38L12.58.18A.38.38,0,0,1,12.9,0a.4.4,0,0,1,.32.17c.31.45,7.53,11.23,6.2,17A6.06,6.06,0,0,1,13.63,22.08Z"
          }
        ></path>
      </g>
    </svg>
  )
}
