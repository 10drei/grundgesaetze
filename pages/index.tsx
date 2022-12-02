import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Sentence, Paragraph, Phrase, Right } from "@prisma/client"
import Header from "../components/Header"
import { sentence, right } from "../lib/index"
import Search from "../components/sections/Search"
import WinnerSentences from "../components/sections/WinnerSentences"
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/10drei_Logo_transparent.svg"

interface FullSentence extends Sentence {
  phrases: Phrase[]
  paragraphs: Paragraph[]
}

export async function getStaticProps() {
  const sentences = await sentence.getWinners()
  const rights = await right.getAll()
  return {
    props: {
      sentences,
      rights,
    },
  }
}

export default function Home({
  sentences,
  rights,
}: {
  sentences: FullSentence[]
  rights: Right[]
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>GrundgeSÄTZE | Startseite</title>
        <meta
          name="description"
          content="Ein Projekt von 10drei e.V. - Die Grundrechte unseres Grundgesetzes werden zu #grundgeSÄTZE - einfach für alle und online zugänglich🦒"
        />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <div className={styles.Hero}>
        <div className={styles.content}>
          <Header />
          <h1 className={styles.title}>
            Grundge<span>SÄTZE</span>
          </h1>
          <p className={styles.intro}>
            Im Rahmen des Demokratie-Projektes GrundgeSÄTZE haben über 500
            Schülerinnen deutschlandweit unsere Grundrechte in eigenen Worten
            formuliert.
          </p>
          <Search />
        </div>
      </div>

      <WinnerSentences sentences={sentences} rights={rights} />

      <div className={styles.Footer}>
        <Image className={styles.image} src={Logo} alt="Logo" />
        <div className={styles.footerContent}>
          <div className={styles.about}>
            <h3>Über 10drei</h3>
            <p>
              Unsere Vision ist eine Gesellschaft, in der die im Grundgesetz
              enthaltenen Werte, wie Würde, Freiheit und Gleichheit Grundlage
              der alltäglichen Entscheidungsfindung sind. Dadurch gestalten wir
              eine Zukunft, deren Fundament eine stabile Demokratie mit mündigen
              Bürgern ist. Eine Zukunft, deren kleinster und zugleich stärkster
              Nenner die geteilten Werte des Grundgesetzes sind.
            </p>
          </div>
          <div className={styles.aboutProject}>
            <h3>Über grundgeSÄTZE</h3>
            <p>
              Die Grundrechte unseres Grundgesetzes werden zu #grundgeSÄTZE -
              einfach für alle und online zugänglich. Bestehend aus
              Eigenformulierungen des Grundgesetzes aus über 40 Schulen
              Deutschlands.
            </p>
          </div>

          <div className={styles.contactInformation}>
            <Link href="mailto:hallo@10drei.org">hallo@10drei.org</Link>
            <p>10drei e.V., c/o Eleven gGmbH | Praterinsel 4, 80538 München</p>
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
    </div>
  )
}
