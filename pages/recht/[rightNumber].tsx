import { right } from "../../lib/"
import { GetStaticPaths, GetStaticProps } from "next"
import { FullRight } from "@/lib/models/right"
import { parseSentenceText, romanize } from "@/lib/utils/format"
import SentenceCard from "../../components/SentenceCard"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Head from "next/head"
import styles from "../../styles/RightPage.module.scss"
import Image from "next/image"

import trophy from "../../public/trophy.png"

export const getStaticPaths: GetStaticPaths = async () => {
  const rights = await right.getAll()

  return {
    paths: rights.map((right) => ({
      params: { rightNumber: right.rightNumber.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.rightNumber) return { props: {} }

  const selectedRight = await right.getByNumber(
    parseInt(context.params?.rightNumber as string)
  )

  return {
    props: {
      selectedRight
    }
  }
}

type PageProps = {
  selectedRight: FullRight
}

export default function RightPage({ selectedRight }: PageProps) {
  const winnerSentence = selectedRight.sentences.find(
    (sentence) => sentence.isWinner
  )
  const filteredPhraseRights = selectedRight.phraseRights
    .filter(
      (phraseRight, i, arr) =>
        arr.findIndex(
          (t) =>
            t.phrase.paragraph.article.id ===
            phraseRight.phrase.paragraph.article.id
        ) === i
    )
    .sort(
      (a, b) =>
        parseInt(a.phrase.paragraph.article.number) -
        parseInt(b.phrase.paragraph.article.number)
    )

  return (
    <div>
      <Head>
        <title>GrundgeSÄTZE | Über das Projekt</title>
        <meta
          name="description"
          content="Rechte verstehen, Zukunft gestalten. Dies ist das Motto unseres Projekts, das sich darauf konzentriert,
            das Verständnis für die grundlegenden Rechte im deutschen
            Grundgesetz bei Schülern und Jugendlichen zu fördern."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className={styles.Hero}>
        <div className={styles.content}>
          <Header />
          <h1 className={styles.title}>{selectedRight.text}</h1>
          <div className={styles.articleWrapper}>
            {filteredPhraseRights.map((phraseRight) => (
              <div className={styles.article} key={phraseRight.phrase.id}>
                <h3>
                  Artikel {phraseRight.phrase.paragraph.article.number}{" "}
                  {romanize(phraseRight.phrase.paragraph.number)} GG
                </h3>
                <p>“{phraseRight.phrase.paragraph.text}”</p>
              </div>
            ))}
          </div>
          <div className={styles.winnerSentence}>
            <h3>Gewinnersatz zu diesem Recht</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: parseSentenceText(winnerSentence?.text!)
              }}
            ></p>
            <Image className={styles.winnerImg} src={trophy} alt="Trophäe" />
          </div>
        </div>
      </div>
      <div className={styles.sentencesWrapper}>
        <h2>Alle Sätze zu diesem Recht</h2>
        <p className={styles.description}>
          {selectedRight.sentences.length > 1
            ? `Schülerinnen und Schüler aus ganz Deutschland haben das Grundgesetz in
              "für sie verständliche Sätze umformuliert. Untenstehende Sätze wurden
          für das Recht „${selectedRight.text}” eingereicht.`
            : "Schülerinnen und Schüler aus ganz Deutschland haben das Grundgesetz in für sie verständliche Sätze umformuliert. " +
              "Jedoch wurden neben dem Gewinnersatz keine weiteren Sätze zu diesem Recht eingereicht."}
        </p>
        <div className={styles.grid}>
          {selectedRight.sentences
            .filter((r) => !r.isWinner)
            .map((sentence) => (
              <SentenceCard
                key={sentence.id}
                articlePath={selectedRight.articlePath}
                sentenceText={sentence.text}
                rightText={selectedRight.text}
              />
            ))}
        </div>
      </div>
      <Footer mode="dark" />
    </div>
  )
}
