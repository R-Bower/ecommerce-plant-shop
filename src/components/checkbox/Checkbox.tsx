import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

import FakeCheckbox from "./FakeCheckbox"

interface Props {
  checked?: boolean
  disabled?: boolean
  label: React.ReactNode
  onChange: (event: React.MouseEvent) => void
  tabIndex: number
}

export function Checkbox({
  checked,
  disabled,
  label,
  onChange,
  tabIndex,
}: Props): React.ReactElement {
  return (
    <div className={clsx(sx({display: "inline-flex", position: "relative"}))}>
      {/*eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions*/}
      <div
        aria-checked={checked}
        className={clsx(
          sx({
            alignItems: "center",
            cursor: "pointer",
            display: "flex",
            gap: 12,
          }),
        )}
        onClick={checked || !disabled ? onChange : undefined}
        role={"checkbox"}
        tabIndex={tabIndex}
      >
        <FakeCheckbox checked={checked} disabled={disabled} />
        {label}
      </div>
    </div>
  )
}
