import Head from "next/head"
import styles from "../styles/Home.module.css"
import { Sentence, Paragraph, Phrase, Right } from "@prisma/client"
import Header from "../components/Header"
import { sentence, right } from "../lib/index"
import Search from "../components/sections/Search"
import WinnerSentences from "../components/sections/WinnerSentences"
import { useEffect, useRef, useState } from "react"
import SentenceCard from "../components/SentenceCard"
import { motion } from "framer-motion"

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
  const [search, setSearch] = useState("")
  const [searchedSentences, setSearchedSentences] = useState<FullSentence[]>([])
  const searchedSentencesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log("This is the search: ", search)
    if (search.length > 3) {
      fetch("/api/sentences/" + search)
        .then(async (res) => {
          console.log("Response:", res)
          const data = await res.json()
          setSearchedSentences(data)
        })
        .catch((e) => {
          console.log("Error: ", e)
        })
    } else {
      setSearchedSentences([])
    }
  }, [search])

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
          <Search search={search} setSearch={setSearch} />

          <div className={styles.searchedSentences} ref={searchedSentencesRef}>
            {searchedSentences.length > 0 &&
              searchedSentences.map((sentence, index) => (
                <motion.div
                  key={sentence.id}
                  animate={{ opacity: 1, translateY: 0 }}
                  initial={{ opacity: 0, translateY: 150 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <SentenceCard
                    articlePath={
                      rights.find((r) => r.id === sentence.rightId)
                        ?.articlePath!
                    }
                    sentenceText={sentence.text}
                    rightText={
                      rights.find((r) => r.id === sentence.rightId)?.text!
                    }
                  />
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <WinnerSentences sentences={sentences} rights={rights} />
    </div>
  )
}
