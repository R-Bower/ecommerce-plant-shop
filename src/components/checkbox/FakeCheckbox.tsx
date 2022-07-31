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
          backgroundColor: checked
            ? "primaryLight"
            : disabled
            ? "actionDisabledBackground"
            : "white",
          border: "1px solid",
          borderColor: checked
            ? "borderActive"
            : disabled
            ? "borderDisabled"
            : "border",
          display: "inline-flex",
          justifyContent: "center",
          size: 18,
        }),
      )}
    >
      <div
        className={clsx(
          sx({
            alignItems: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }),
        )}
      ></div>
    </div>
  )
}
