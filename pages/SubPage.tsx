import React from "react"
import styles from "../styles/Projekt.module.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"

interface SubPageProps {}

const SubPage = (props: SubPageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrundgeSÄTZE | Startseite</title>
        <meta
          name="description"
          content="Ein Projekt von 10drei e.V. - Die Grundrechte unseres Grundgesetzes werden zu #grundgeSÄTZE - einfach für alle und online zugänglich🦒"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className={styles.Hero}>
        <div className={styles.content}>
          <Header />
        </div>
      </div>

      <Footer mode="dark" />
    </div>
  )
}

export default SubPage
