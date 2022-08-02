import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function CeramicPotIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      height={"17px"}
      version={"1.1"}
      viewBox={"0 0 17 17"}
      width={"17px"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g fill={"none"} fillRule={"evenodd"} id={"Product-Pages"}>
        <g
          fill={"currentColor"}
          fillRule={"nonzero"}
          id={"D---PDP-[Plant-&amp;-Planter]"}
          transform={"translate(-970 -377)"}
        >
          <g id={"Purchase-Info"} transform={"translate(828 168)"}>
            <g id={"Select-Pot"} transform={"translate(0 168)"}>
              <g id={"Pot-Type"} transform={"translate(0 31)"}>
                <g id={"Ceramic"} transform={"translate(120)"}>
                  <g transform={"translate(12)"}>
                    <g id={"grower-icon"} transform={"translate(10 10)"}>
                      <path
                        d={
                          "m0.010979 0.031491c-0.5147-0.09242 17.239 0.050026 16.986 0.029676l-0.026493 1.2261c-0.13356 4.4916-0.65656 8.9384-1.199 13.387-0.060223 0.49178-0.46918 0.52993-0.73528 0.29846-3.8641 1.7772-8.0194 2.0231-11.999 0.67153-0.21918 0.088181-0.47828-0.0059353-0.57002-0.37307-1.2234-4.8864-2.0028-10.159-2.4565-15.24zm0.72815 0.70764c0.98928 4.8672 1.9139 9.2754 2.5602 14.218 4.0026 0.67922 7.8404 0.27561 11.687-1.245 0.50636-4.5754 0.88346-7.976 1.5205-12.529-5.2504-0.30463-10.569 0.26548-15.768-0.44361z"
                        }
                        id={"Combined-Shape"}
                      ></path>
                    </g>
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
