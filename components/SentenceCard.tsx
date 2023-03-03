import styles from "./SentenceCard.module.scss"
import prizeIcon from "../public/ribbon.svg"
import Image from "next/image"
import { useRouter } from "next/router"
import classNames from "classnames"

type Props = {
  articlePath: string
  sentenceText: string
  rightText: string
  rightNumber?: number
  isWinner?: boolean
}

function Card({
  articlePath,
  sentenceText,
  rightText,
  rightNumber,
  isWinner = false
}: Props) {
  const router = useRouter()
  let regex = new RegExp("__([^_]+)__", "g")

  const matches = sentenceText.matchAll(regex)
  for (let match of Array.from(matches)) {
    sentenceText = sentenceText.replace(
      match[0],
      `<span class="${styles.highlight}">${match[1]}</span>`
    )
  }

  const navigate = () => {
    if (!rightNumber) return
    router.push(`/recht/${rightNumber}`)
  }

  return (
    <div
      key={sentenceText}
      className={classNames(
        styles.SentenceCard,
        !!rightNumber && styles.clickable
      )}
      onClick={navigate}
    >
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
