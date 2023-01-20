import React from "react"
import styles from "../styles/Projekt.module.scss"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Head from "next/head"
import Image from "next/image"
import image01 from "../public/img01.png"
import image02 from "../public/img02.png"

function Projekt() {
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
          <h1 className={styles.title}>
            <span>Rechte</span> verstehen, <span>Zukunft</span> gestalten
          </h1>
          <p className={styles.text}>
            Dies ist das Motto unseres Projekts, das sich darauf konzentriert,
            das Verständnis für die grundlegenden Rechte im deutschen
            Grundgesetz bei Schülern und Jugendlichen zu fördern. Wir glauben,
            dass durch ein besseres Verständnis dieser Rechte, die nächste
            Generation in die Lage versetzt wird, ihre Zukunft aktiv
            mitzugestalten und die Demokratie in Deutschland zu stärken. Wir
            sind stolz darauf, diese wichtige Arbeit zu leisten und freuen uns
            darauf, gemeinsam mit Ihnen die Zukunft zu gestalten.
          </p>

          <div className={styles.imageWrapper}>
            <Image className={styles.image1} src={image01} alt="Präsentation" />
            <Image className={styles.image2} src={image02} alt="Klassenraum" />
          </div>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            turpis sed libero vehicula aliquam. Curabitur porta, nibh at congue
            volutpat, mi orci interdum arcu, nec rutrum ante ligula non nisi. In
            rutrum, mauris ac euismod aliquam, nisi mi dapibus massa, ut viverra
            ex ligula a felis. Quisque dui libero, ullamcorper sed eleifend nec,
            interdum at lorem.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
            turpis sed libero vehicula aliquam. Curabitur porta, nibh at congue
            volutpat, mi orci interdum arcu, nec rutrum ante ligula non nisi. In
            rutrum, mauris ac euismod aliquam, nisi mi dapibus massa, ut viverra
            ex ligula a felis. Quisque dui libero, ullamcorper sed eleifend nec,
            interdum at lorem. Curabitur porta, nibh at congue volutpat, mi orci
            interdum arcu, nec rutrum ante ligula non nisi. In rutrum, mauris ac
            euismod aliquam, nisi mi dapibus massa, ut viverra ex ligula a
            felis.
          </p>
        </div>
      </div>

      <Footer mode="light" />
    </div>
  )
}

export default Projekt
