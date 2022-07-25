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
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      aria-checked={checked}
      className={clsx(sx({cursor: "pointer", position: "relative"}))}
      onClick={onChange}
      role={"checkbox"}
      tabIndex={tabIndex}
    >
      <div
        className={clsx(sx({alignItems: "center", display: "flex", gap: 8}))}
      >
        <FakeCheckbox checked={checked} disabled={disabled} />
        {label}
      </div>
    </div>
  )
}
