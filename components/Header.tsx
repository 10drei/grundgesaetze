//website header
import React from "react"
import Link from "next/link"
import styles from "./Header.module.scss"
import Image from "next/image"
import instagram from "../public/instagram.svg"

function Header() {
  return (
    <div className={styles.Header}>
      <Link className={styles.link} href={"/"}>
        Startseite
      </Link>
      <Link className={styles.link} href="/projekt">
        Über das Projekt
      </Link>
      <Link href="https://www.instagram.com/grundgesaetze/" target="_blank">
        <Image
          className={styles.instagramIcon}
          src={instagram}
          alt="Instagram"
        />
      </Link>
    </div>
  )
}

export default Header
