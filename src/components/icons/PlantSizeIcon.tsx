import React from "react"

interface Props extends React.SVGProps<SVGSVGElement> {}

export function PlantSizeIcon({...props}: Props): React.ReactElement {
  return (
    <svg
      aria-hidden={"true"}
      className={"icon-plant-size "}
      focusable={"false"}
      role={"presentation"}
      viewBox={"0 0 27 25"}
      xmlns={"http://www.w3.org/2000/svg"}
      {...props}
    >
      <g
        fill={"none"}
        fillRule={"evenodd"}
        id={"Product-Pages"}
        stroke={"none"}
        strokeWidth={"1"}
      >
        <g
          fill={"#425934"}
          fillRule={"nonzero"}
          id={"D---PDP-[Plant-&amp;-Planter]"}
          transform={"translate(-840.000000, -939.000000)"}
        >
          <g
            id={"Purchase-Info"}
            transform={"translate(828.000000, 168.000000)"}
          >
            <g id={"Group-3"} transform={"translate(12.000000, 525.000000)"}>
              <path
                d={
                  "M10.1484375,270.5 C10.2421875,270.5 10.3242188,270.460938 10.3945312,270.382812 C10.4648438,270.304688 10.5,270.21875 10.5,270.125 L10.5,270.125 L10.4831198,269.613335 C10.4137812,266.56711 10.9194079,263.948602 12,261.757812 C13.140625,259.445312 14.421875,257.558594 15.84375,256.097656 C17.265625,254.636719 18.5859375,253.5625 19.8046875,252.875 C21.0234375,252.203125 21.6484375,251.859375 21.6796875,251.84375 C21.7421875,251.8125 21.7929688,251.769531 21.8320312,251.714844 C21.8710938,251.660156 21.890625,251.59375 21.890625,251.515625 C21.890625,251.484375 21.8867188,251.457031 21.8789062,251.433594 C21.8710938,251.410156 21.8671875,251.390625 21.8671875,251.375 C21.8359375,251.3125 21.7890625,251.261719 21.7265625,251.222656 C21.6640625,251.183594 21.6015625,251.164062 21.5390625,251.164062 L21.5390625,251.164062 L21.4570312,251.164062 C21.4335938,251.164062 21.4140625,251.171875 21.3984375,251.1875 C21.3671875,251.203125 20.71875,251.5625 19.453125,252.265625 C18.1875,252.96875 16.8164062,254.078125 15.3398438,255.59375 C14.4960938,256.459821 13.6995376,257.471301 12.9501754,258.628189 L12.714,259.001 L12.65625,258.772461 C12.6328125,258.671875 12.6113281,258.570557 12.5917969,258.468506 L12.5390625,258.160156 C12.4765625,257.746094 12.4453125,257.328125 12.4453125,256.90625 C12.4453125,256.015625 12.5742188,255.175781 12.8320312,254.386719 C13.0898438,253.597656 13.453125,252.875 13.921875,252.21875 C14.703125,251.1875 15.6875,250.351562 16.875,249.710938 C18.0625,249.085938 19.2578125,248.59375 20.4609375,248.234375 C21.6640625,247.875 22.7734375,247.625 23.7890625,247.484375 C24.7890625,247.34375 25.5,247.265625 25.921875,247.25 C25.984375,248.765625 25.9453125,250.171875 25.8046875,251.46875 C25.6484375,252.78125 25.4023438,253.976562 25.0664062,255.054688 C24.7304688,256.132812 24.296875,257.09375 23.765625,257.9375 C23.234375,258.796875 22.609375,259.53125 21.890625,260.140625 C20.984375,260.921875 20.03125,261.46875 19.03125,261.78125 C18.046875,262.109375 17.1367188,262.308594 16.3007812,262.378906 C15.4648438,262.449219 14.7734375,262.453125 14.2265625,262.390625 C13.6796875,262.3125 13.3984375,262.273438 13.3828125,262.273438 L13.3828125,262.273438 L13.3125,262.273438 C13.21875,262.273438 13.1367188,262.308594 13.0664062,262.378906 C12.9960938,262.449219 12.9609375,262.53125 12.9609375,262.625 C12.9609375,262.71875 12.9882812,262.796875 13.0429688,262.859375 C13.0976562,262.921875 13.1640625,262.960938 13.2421875,262.976562 L13.2421875,262.976562 L13.171875,262.976562 C13.484375,263.039062 13.8046875,263.085938 14.1328125,263.117188 C14.4609375,263.148438 14.796875,263.164062 15.140625,263.164062 L15.140625,263.164062 L15.46875,263.164062 C16.125,263.164062 16.765625,263.109375 17.390625,263 C18.015625,262.875 18.6171875,262.707031 19.1953125,262.496094 C19.7734375,262.285156 20.328125,262.03125 20.859375,261.734375 C21.375,261.421875 21.8671875,261.078125 22.3359375,260.703125 C23.1171875,260.03125 23.796875,259.234375 24.375,258.3125 C24.9375,257.40625 25.3984375,256.371094 25.7578125,255.207031 C26.1171875,254.042969 26.3671875,252.765625 26.5078125,251.375 C26.6484375,249.984375 26.6875,248.476562 26.625,246.851562 L26.625,246.851562 L26.6184082,246.783447 C26.6052246,246.717529 26.5722656,246.658203 26.5195312,246.605469 C26.4492188,246.535156 26.3671875,246.5 26.2734375,246.5 L26.2734375,246.5 L26.25,246.5 C26.171875,246.5 25.6328125,246.546875 24.6328125,246.640625 C23.6171875,246.71875 22.4335938,246.9375 21.0820312,247.296875 C19.7304688,247.65625 18.3359375,248.1875 16.8984375,248.890625 C15.4765625,249.59375 14.296875,250.570312 13.359375,251.820312 L13.359375,251.820312 L13.3828125,251.773438 C12.8671875,252.492188 12.4609375,253.289062 12.1640625,254.164062 C11.8671875,255.039062 11.71875,255.953125 11.71875,256.90625 C11.71875,257.359375 11.7539062,257.804688 11.8242188,258.242188 C11.8945312,258.679688 11.9921875,259.09375 12.1171875,259.484375 C12.1328125,259.5625 12.171875,259.628906 12.234375,259.683594 C12.25,259.697266 12.2666016,259.709229 12.2841797,259.719482 L12.1270528,259.991032 C11.8593152,260.465761 11.5982143,260.960938 11.34375,261.476562 C11.046875,262.074219 10.7915039,262.703125 10.5776367,263.363281 L10.531,263.514 L10.4823023,263.397959 C10.2131696,262.794643 9.89811862,262.204082 9.53714923,261.626276 L9.2578125,261.195312 C8.5859375,260.195312 7.921875,259.300781 7.265625,258.511719 C6.609375,257.722656 6.03125,257.085938 5.53125,256.601562 C5.03125,256.117188 4.7578125,255.851562 4.7109375,255.804688 C4.6796875,255.789062 4.64453125,255.773438 4.60546875,255.757812 C4.56640625,255.742188 4.53125,255.734375 4.5,255.734375 C4.390625,255.734375 4.3046875,255.769531 4.2421875,255.839844 C4.1796875,255.910156 4.1484375,256 4.1484375,256.109375 C4.1484375,256.15625 4.15625,256.199219 4.171875,256.238281 C4.1875,256.277344 4.2109375,256.3125 4.2421875,256.34375 L4.2421875,256.34375 L4.26236979,256.363281 C4.3296441,256.428385 4.56510417,256.65625 4.96875,257.046875 C5.4375,257.53125 5.99609375,258.15625 6.64453125,258.921875 C7.29296875,259.6875 7.953125,260.554688 8.625,261.523438 C8.91294643,261.945312 9.17506378,262.371492 9.41135204,262.801977 L9.495,262.962 L9.47680664,262.969238 C9.30786133,263.037598 9.1340332,263.096191 8.95532227,263.14502 L8.68359375,263.210938 C8.31640625,263.289062 7.9375,263.328125 7.546875,263.328125 C7,263.328125 6.484375,263.253906 6,263.105469 C5.515625,262.957031 5.0703125,262.75 4.6640625,262.484375 C3.7734375,261.84375 3.0625,260.945312 2.53125,259.789062 C2.015625,258.617188 1.625,257.421875 1.359375,256.203125 C1.09375,254.984375 0.921875,253.84375 0.84375,252.78125 C0.765625,251.71875 0.7265625,250.976562 0.7265625,250.554688 C2.8046875,250.632812 4.4140625,251.078125 5.5546875,251.890625 C6.6953125,252.703125 7.53125,253.589844 8.0625,254.550781 C8.59375,255.511719 8.90625,256.398438 9,257.210938 C9.109375,258.023438 9.1640625,258.46875 9.1640625,258.546875 C9.1640625,258.640625 9.19921875,258.722656 9.26953125,258.792969 C9.33984375,258.863281 9.421875,258.898438 9.515625,258.898438 C9.609375,258.898438 9.69140625,258.863281 9.76171875,258.792969 C9.83203125,258.722656 9.8671875,258.640625 9.8671875,258.546875 C9.8671875,258.53125 9.8125,258.070312 9.703125,257.164062 C9.59375,256.257812 9.23828125,255.265625 8.63671875,254.1875 C8.03515625,253.109375 7.09375,252.125 5.8125,251.234375 C4.53125,250.328125 2.71875,249.859375 0.375,249.828125 L0.375,249.828125 L0.328125,249.828125 C0.234375,249.828125 0.15625,249.859375 0.09375,249.921875 C0.03125,249.984375 0,250.0625 0,250.15625 L0,250.15625 L0.000833333333,250.243021 C0.00444444444,250.436215 0.0197916667,250.993229 0.046875,251.914062 C0.09375,252.976562 0.24609375,254.203125 0.50390625,255.59375 C0.76171875,256.984375 1.1796875,258.382812 1.7578125,259.789062 C2.3359375,261.195312 3.1640625,262.289062 4.2421875,263.070312 L4.2421875,263.070312 L4.21875,263.070312 C4.640625,263.367188 5.109375,263.601562 5.625,263.773438 C6.140625,263.945312 6.6796875,264.03125 7.2421875,264.03125 L7.2421875,264.03125 L7.3359375,264.03125 C7.8046875,264.015625 8.2578125,263.96875 8.6953125,263.890625 C9.1328125,263.8125 9.546875,263.695312 9.9375,263.539062 L9.809,263.587 L9.8494898,263.668686 C9.91677296,263.814094 9.98118622,263.959981 10.0427296,264.106346 L10.21875,264.546875 L10.21875,264.570312 L10.21875,264.570312 L10.234,264.599 L10.144043,265.007656 C9.84912109,266.427969 9.72021484,267.973281 9.75732422,269.643594 L9.7734375,270.148438 C9.7734375,270.242188 9.80859375,270.324219 9.87890625,270.394531 C9.94921875,270.464844 10.03125,270.5 10.125,270.5 L10.125,270.5 L10.1484375,270.5 Z"
                }
                id={"plant-size"}
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}