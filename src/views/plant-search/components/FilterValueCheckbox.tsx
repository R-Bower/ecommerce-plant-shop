import clsx from "clsx"
import React from "react"

import {Checkbox} from "~components/checkbox"
import {bodyFont} from "~styles/body-font.css"
import {sx} from "~styles/sx.css"

interface Props {
  checked: boolean
  disabled?: boolean
  filterGroupId: string
  onChange: (id: string, value: string, active: boolean) => void
  value: string
}

export function FilterValueCheckbox({
  checked,
  disabled,
  filterGroupId,
  onChange,
  value,
}: Props): React.ReactElement {
  const [localChecked, setLocalChecked] = React.useState(checked)

  const onChangeLocal = React.useCallback(
    (event, eventChecked) => {
      setLocalChecked(eventChecked)
      // delay the onChange to prevent a laggy click
      setTimeout(() => {
        onChange(filterGroupId, value, eventChecked)
      }, 50)
    },
    [filterGroupId, onChange, value],
  )

  /*
   * Sync this checkbox's checked state with state from the parent component.
   */
  React.useEffect(() => {
    setLocalChecked(checked)
  }, [checked])

  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      label={
        <span
          className={clsx(
            sx({
              color: disabled && !checked ? "textDisabled" : "textPrimary",
            }),
            bodyFont({
              variant: "body",
            }),
          )}
        >
          {value}
        </span>
      }
      onChange={(event) => {
        onChangeLocal(event, !localChecked)
      }}
      tabIndex={0}
    />
  )
}
