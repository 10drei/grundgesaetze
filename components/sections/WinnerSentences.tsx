import styles from "./WinnerSentences.module.css"
import SentenceCard from "../SentenceCard"
import { Right, Sentence } from "@prisma/client"

type Props = {
  sentences: Sentence[]
  rights: Right[]
}

function WinnerSentences({ sentences, rights }: Props) {
  return (
    <div className={styles.WinnerSentences}>
      <h2>Alle Gewinner-Sätze</h2>
      <div className={styles.grid}>
        {sentences.map((sentence) => {
          const right = rights.find((r) => r.id === sentence.rightId)
          return (
            <SentenceCard
              key={sentence.id}
              articlePath={right?.articlePath ?? ""}
              sentenceText={sentence.text}
              rightText={right?.text ?? ""}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WinnerSentences
