import styles from "./SentenceCard.module.scss"
import prizeIcon from "../public/ribbon.svg"
import Image from "next/image"

type Props = {
  articlePath: string
  sentenceText: string
  rightText: string
  isWinner?: boolean
}

function Card({
  articlePath,
  sentenceText,
  rightText,
  isWinner = false
}: Props) {
  let regex = new RegExp("__([^_]+)__", "g")

  const matches = sentenceText.matchAll(regex)
  for (let match of Array.from(matches)) {
    sentenceText = sentenceText.replace(
      match[0],
      `<span class="${styles.highlight}">${match[1]}</span>`
    )
  }

  return (
    <div key={sentenceText} className={styles.SentenceCard}>
      <p className={styles.header}>
        <span className={styles.text}>
          {articlePath} | {rightText}
        </span>
        {isWinner && (
          <Image
            className={styles.prizeIcon}
            src={prizeIcon}
            alt={"Gewinnersatz"}
            width={20}
          />
        )}
      </p>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: sentenceText
        }}
      ></p>
    </div>
  )
}

export default Card
