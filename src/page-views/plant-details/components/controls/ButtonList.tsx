import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

import {ButtonListOption} from "../../types"
import {CircleButton} from "./CircleButton"

interface Props {
  activeOptionId: string
  onOptionSelected: (option: ButtonListOption) => void
  options: ButtonListOption[]
}

export function ButtonList({
  activeOptionId,
  onOptionSelected,
  options,
}: Props): React.ReactElement {
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
          gap: 12,
        }),
      )}
    >
      {options.map((option) => {
        return (
          <CircleButton
            key={option.id}
            active={option.id === activeOptionId}
            onClick={() => {
              onOptionSelected(option)
            }}
            option={option}
          />
        )
      })}
    </div>
  )
}
