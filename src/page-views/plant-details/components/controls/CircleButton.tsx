import clsx from "clsx"
import React from "react"

import {font} from "~styles/font.css"
import {sx} from "~styles/sx.css"

import {ButtonListOption} from "../../types"
import {circleButtonStyle} from "./CircleButton.css"

interface Props {
  active: boolean
  onClick: (event: React.MouseEvent | React.KeyboardEvent) => void
  option: ButtonListOption
}

export function CircleButton({
  active,
  onClick,
  option,
}: Props): React.ReactElement {
  const {icon: Icon, id, label} = option
  return (
    <div
      className={clsx(
        sx({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }),
      )}
      id={`circle-button-${id}`}
      onClick={onClick}
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          onClick(event)
        }
      }}
      role={"button"}
      tabIndex={-1}
    >
      <button
        className={clsx(
          active ? circleButtonStyle.active : circleButtonStyle.default,
          sx({
            color: "inherit",
          }),
          font({variant: "button"}),
        )}
      >
        {Icon ? <Icon height={18} width={18} /> : option.label}
      </button>
      {Icon ? (
        <span className={clsx(font({variant: "caption"}), sx({}))}>
          {label}
        </span>
      ) : null}
    </div>
  )
}
