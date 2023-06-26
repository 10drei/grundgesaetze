import styles from "./Footer.module.scss"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/10drei_Logo.svg"
import classNames from "classnames"

type Props = {
  mode: "light" | "dark"
}

function Footer({ mode }: Props) {
  return (
    <div className={classNames(styles.Footer, styles[mode])}>
      <Image className={styles.image} src={Logo} alt="Logo" />
      <div className={styles.footerContent}>
        <div className={styles.about}>
          <h3>Über 10drei</h3>
          <p>
            Unsere Vision ist eine Gesellschaft, in der die im Grundgesetz
            enthaltenen Werte, wie Würde, Freiheit und Gleichheit Grundlage der
            alltäglichen Entscheidungsfindung sind. Dadurch gestalten wir eine
            Zukunft, deren Fundament eine stabile Demokratie mit mündigen
            Bürgern ist. Eine Zukunft, deren kleinster und zugleich stärkster
            Nenner die geteilten Werte des Grundgesetzes sind.
          </p>
        </div>
        <div className={styles.aboutProject}>
          <h3>Über GrundgeSÄTZE</h3>
          <p>
            Die Grundrechte unseres Grundgesetzes werden zu #grundgeSÄTZE -
            einfach für alle und online zugänglich. Im Rahmen des
            Demokratie-Projektes GrundgeSÄTZE haben über 500 Schülerinnen
            deutschlandweit unsere Grundrechte in eigenen Worten formuliert.
          </p>
        </div>

        <div className={styles.contactInformation}>
          <Link href="mailto:hallo@10drei.org">hallo@10drei.org</Link>
          <p>10drei e.V. | Augustenstr. 27, RGB, 80333 München</p>
        </div>

        <div className={styles.links}>
          <Link target="_blank" href="https://10drei.org/impressum">
            Impressum
          </Link>
          <Link target="_blank" href="https://10drei.org/datenschutz">
            Datenschutz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
