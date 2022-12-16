import React, { MouseEventHandler } from "react"
import styles from "./SearchBadge.module.scss"
import classNames from "classnames"

type Props = {
  active: boolean | undefined
  children: React.ReactNode
  className?: string
  onClick?: MouseEventHandler<HTMLSpanElement>
}

function SearchBadge({ active = false, onClick, className, children }: Props) {
  return (
    <span
      className={classNames(
        styles.SearchBadge,
        active && styles.active,
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default SearchBadge
