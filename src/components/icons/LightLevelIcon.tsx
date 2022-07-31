import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function LightLevelIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      aria-hidden={"true"}
      className={"icon-sun "}
      focusable={"false"}
      role={"presentation"}
      viewBox={"0 0 25 25"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g>
        <path
          d={
            "m12.5 18.62a6 6 0 1 1 5.95-6 6 6 0 0 1-5.95 6zm0-11.14a5.19 5.19 0 1 0 5.18 5.18 5.19 5.19 0 0 0-5.18-5.18z"
          }
        ></path>
        <path
          d={
            "M12.5,5.46a.39.39,0,0,1-.39-.38V.39a.39.39,0,0,1,.78,0V5.08A.39.39,0,0,1,12.5,5.46Z"
          }
        ></path>
        <path
          d={
            "M12.5,25a.39.39,0,0,1-.39-.39V19.92a.39.39,0,0,1,.78,0v4.69A.39.39,0,0,1,12.5,25Z"
          }
        ></path>
        <path
          d={"M5.08,13.05H.39a.39.39,0,1,1,0-.77H5.08a.39.39,0,0,1,0,.77Z"}
        ></path>
        <path
          d={"M24.61,13.05H19.92a.39.39,0,0,1,0-.77h4.69a.39.39,0,1,1,0,.77Z"}
        ></path>
        <path
          d={
            "M3.79,21.47a.39.39,0,0,1-.28-.12.39.39,0,0,1,0-.54l3.37-3.26a.39.39,0,1,1,.54.55L4.06,21.36A.4.4,0,0,1,3.79,21.47Z"
          }
        ></path>
        <path
          d={
            "M17.84,7.89a.39.39,0,0,1-.27-.67L20.94,4a.39.39,0,1,1,.54.56L18.11,7.78A.43.43,0,0,1,17.84,7.89Z"
          }
        ></path>
        <path
          d={
            "M21.51,21.14a.39.39,0,0,1-.26-.1l-3.48-3.13a.38.38,0,1,1,.51-.57l3.49,3.13a.39.39,0,0,1,0,.55A.4.4,0,0,1,21.51,21.14Z"
          }
        ></path>
        <path
          d={
            "M7,8.09A.4.4,0,0,1,6.72,8L3.23,4.85a.38.38,0,0,1,0-.54.39.39,0,0,1,.55,0L7.23,7.41a.38.38,0,0,1,0,.55A.39.39,0,0,1,7,8.09Z"
          }
        ></path>
      </g>
    </svg>
  )
}