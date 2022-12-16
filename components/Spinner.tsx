import styles from "./Spinner.module.scss"
import classNames from "classnames"

type Props = {
  className?: string
}

function Spinner({ className }: Props) {
  return (
    <div className={classNames(styles.skFadingCircle, className)}>
      <div className={classNames(styles.skCircle1, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle2, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle3, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle4, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle5, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle6, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle7, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle8, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle9, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle10, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle11, styles.skCircle)}></div>
      <div className={classNames(styles.skCircle12, styles.skCircle)}></div>
    </div>
  )
}

export default Spinner
