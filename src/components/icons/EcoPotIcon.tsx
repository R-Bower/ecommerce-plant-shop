import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function EcoPotIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      height={"17px"}
      version={"1.1"}
      viewBox={"0 0 20 17"}
      width={"20px"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g fill={"currentColor"} fillRule={"evenodd"} id={"Product-Pages"}>
        <g
          fill={"currentColor"}
          fillRule={"nonzero"}
          id={"D---PDP-[Plant-&amp;-Planter]"}
          transform={"translate(-848 -378)"}
        >
          <g
            fill={"currentColor"}
            id={"Purchase-Info"}
            transform={"translate(828 168)"}
          >
            <g
              fill={"currentColor"}
              id={"Select-Pot"}
              transform={"translate(0 168)"}
            >
              <g fill={"currentColor"} id={"Pot-Type"} transform={"translate(0 31)"}>
                <g fill={"currentColor"} transform={"translate(12)"}>
                  <g
                    fill={"currentColor"}
                    id={"Eco-Planter"}
                    transform={"translate(8 11)"}
                  >
                    <path
                      d={
                        "m18.687 0c1.5505 0 1.1018 1.4365 0.99953 1.4546 0.0063535 0.041189 0.017328 0.078043 0.016173 0.12646-0.20447 8.0991-3.5655 15.356-10.198 14.955-5.825-0.35264-8.9954-8.3341-9.2576-15.279-0.0069311-7.2262e-4 -0.01564 0.0097989-0.019638 0.0043357-0.38413-0.52483-0.2237-1.1468 0.050828-1.1468 1.5128 0 16.806-0.10498 18.294-0.11425zm-17.892 1.2537c1.3285 5.687 2.6887 13.51 8.2474 14.044 2.3958 0.22979 4.9095-1.037 6.815-3.0604 2.2509-2.3904 2.717-7.1873 3.0225-10.656 0.0028879-0.036131 0.016172-0.063591 0.023681-0.096109-6.0035 0.15825-12.106-0.052029-18.109-0.23124z"
                      }
                      fill={"currentColor"}
                      id={"Combined-Shape"}
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
