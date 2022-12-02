import styles from "./Spinner.module.css"
import classNames from "classnames"

type Props = {
  className?: string
}

function Spinner({ className }: Props) {
  return (
    <div className={classNames(styles.spinner, className)}>
      <div className={styles.doubleBounce1}></div>
      <div className={styles.doubleBounce2}></div>
    </div>
  )
}

export default Spinner
