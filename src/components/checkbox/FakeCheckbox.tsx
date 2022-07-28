import clsx from "clsx"
import React from "react"

import {sx} from "~styles/sx.css"

import {CheckIcon} from "./CheckIcon"
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
          backgroundColor: disabled
            ? "actionDisabledBackground"
            : checked
            ? "primaryLight"
            : "white",
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
          sx({
            alignItems: "center",
            color: "white",
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }),
        )}
      >
        {/* TODO: replace with icon */}
        {checked ? <CheckIcon height={11} width={10} /> : null}
      </div>
    </div>
  )
}
