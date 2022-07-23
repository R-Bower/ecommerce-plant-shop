import clsx from "clsx"
import React from "react"

import {siteContentWrapper, sitePaddingX} from "~styles/common.css"
import {sx} from "~styles/sx.css"

import {Link} from "../link"
import {Logo} from "./Logo"

export function Header(): React.ReactElement {
  return (
    <div
      className={clsx(
        sitePaddingX,
        sx({
          backgroundColor: "primaryMain",
          display: "flex",
          flex: 1,
          height: [70, 70, 100],
          maxHeight: [70, 70, 100],
        }),
      )}
    >
      <div className={clsx(siteContentWrapper)}>
        <div
          className={clsx(
            sx({
              alignItems: "center",
              display: "flex",
              height: [70, 70, 100],
            }),
          )}
        >
          <Link href={"/"}>
            <div
              className={sx({
                cursor: "pointer",
                display: "flex",
                flex: 1,
                gap: 24,
              })}
            >
              <span
                className={clsx(
                  sx({
                    color: "grey50",
                    cursor: "pointer",
                    fill: "grey50",
                    height: [50, 50, 75],
                  }),
                )}
              >
                <Logo className={clsx(sx({height: [50, 50, 75]}))} />
              </span>
              <div
                className={clsx(
                  sx({
                    alignSelf: "center",
                    display: "flex",
                    flex: 1,
                  }),
                )}
              >
                <h3 className={clsx(sx({color: "grey100"}))}>Plant Shop</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
