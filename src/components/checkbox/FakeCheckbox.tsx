import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

import {fakeCheckboxWrapperStyle} from "./FakeCheckbox.styles.css"

interface Props {
  checked?: boolean
  disabled?: boolean
}

export default function FakeCheckbox({
  checked,
  disabled,
}: Props): React.ReactElement {
  return (
    <div
      className={clsx(
        fakeCheckboxWrapperStyle,
        sx({
          alignItems: "center",
          backgroundColor: disabled ? "actionDisabledBackground" : "white",
          border: "1px solid",
          borderColor: disabled
            ? "borderDisabled"
            : checked
            ? "borderActive"
            : "border",
          display: "inline-flex",
          justifyContent: "center",
          size: 16,
        }),
      )}
    >
      <div
        className={clsx(
          sx({alignItems: "center", justifyContent: "center", p: 1, size: 16}),
        )}
      >
        {/* TODO: replace with icon */}
        {checked ? `+` : null}
      </div>
    </div>
  )
}
