import React, { MouseEventHandler } from "react"
import styles from "./SearchBadge.module.css"
import classNames from "classnames"

type Props = {
  text: string
  active: boolean | undefined
  onClick?: MouseEventHandler<HTMLSpanElement>
}

function SearchBadge({ text, active = false, onClick }: Props) {
  return (
    <span
      className={classNames(styles.SearchBadge, active && styles.active)}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default SearchBadge
