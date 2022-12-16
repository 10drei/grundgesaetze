import styles from "./SentenceCard.module.scss"

type Props = {
  articlePath: string
  sentenceText: string
  rightText: string
}

function Card({ articlePath, sentenceText, rightText }: Props) {
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
        {articlePath} | {rightText}
      </p>
      <p
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: sentenceText,
        }}
      ></p>
    </div>
  )
}

export default Card
