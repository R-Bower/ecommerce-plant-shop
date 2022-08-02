import clsx from "clsx"
import React from "react"

import {MinusIcon, PlusIcon} from "~components/icons"
import {font} from "~styles/font.css"
import {sx} from "~styles/sx.css"

import {
  addToCartButtonStyle,
  addToCartButtonWrapperStyle,
  countButtonStyle,
  counterStyle,
  plusIconStyle,
} from "./AddToCartControls.css"

export function AddToCartControls(): React.ReactElement {
  const [count, setCount] = React.useState(1)
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
          flexDirection: ["column", "row"],
          gap: 8,
          width: "100%",
        }),
      )}
    >
      <div className={addToCartButtonWrapperStyle}>
        <button className={addToCartButtonStyle}>
          <span>ADD TO CART</span>
        </button>
      </div>
      {/* Counter */}
      <div className={clsx(counterStyle)}>
        <button
          className={countButtonStyle}
          onClick={() => setCount((prevCount) => Math.max(1, prevCount - 1))}
        >
          <MinusIcon height={16} width={16} />
        </button>
        <span
          className={clsx(
            sx({
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }),
            font({
              variant: "buttonLarge",
            }),
          )}
        >
          {count}
        </span>
        <button
          className={countButtonStyle}
          onClick={() => setCount((prevCount) => Math.min(prevCount + 1, 99))}
        >
          <PlusIcon className={plusIconStyle} height={14} width={14} />
        </button>
      </div>
    </div>
  )
}
