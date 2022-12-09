import styles from "./SentenceCard.module.scss"

type Props = {
  articlePath: string
  sentenceText: string
  rightText: string
}

function Card({ articlePath, sentenceText, rightText }: Props) {
  return (
    <div key={sentenceText} className={styles.SentenceCard}>
      <p className={styles.header}>
        {articlePath} | {rightText}
      </p>
      <p className={styles.content}>{sentenceText}</p>
    </div>
  )
}

export default Card
