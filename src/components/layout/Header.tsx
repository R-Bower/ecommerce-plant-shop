import clsx from "clsx"
import React from "react"

import {pagePaddingX} from "../../styles/layout.css"
import {sx} from "../../styles/sx.css"
import {Link} from "../link"
import {headerStyle, logoStyle} from "./Header.styles.css"
import {Logo} from "./Logo"

export function Header(): React.ReactElement {
  return (
    <div
      className={clsx(
        sx({
          display: "flex",
          flex: 1,
          height: [70, 70, 100],
          maxHeight: [70, 70, 100],
          px: pagePaddingX,
        }),
        headerStyle,
      )}
    >
      <div
        className={clsx(
          sx({
            height: 100,
          }),
          logoStyle,
        )}
      >
        <Link href={"/"}>
          <span className={logoStyle}>
            <Logo height={100} />
          </span>
        </Link>
      </div>
    </div>
  )
}
