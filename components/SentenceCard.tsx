import styles from "./SentenceCard.module.scss"
import prizeIcon from "../public/ribbon.svg"
import Image from "next/image"
import { useRouter } from "next/router"
import classNames from "classnames"
import NextLink from "next/link"
import React from "react"

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
  let regex = new RegExp("__([^_]+)__", "g")

  const matches = sentenceText.matchAll(regex)
  for (let match of Array.from(matches)) {
    sentenceText = sentenceText.replace(
      match[0],
      `<span class="${styles.highlight}">${match[1]}</span>`
    )
  }

  return !rightNumber ? (
    <div
      key={sentenceText}
      className={classNames(
        styles.SentenceCard,
        !!rightNumber && styles.clickable
      )}
    >
      <CardContent
        props={{
          articlePath,
          sentenceText,
          rightText,
          rightNumber,
          isWinner
        }}
      />
    </div>
  ) : (
    <NextLink
      href={`/recht/${rightNumber}`}
      key={sentenceText}
      className={classNames(
        styles.SentenceCard,
        !!rightNumber && styles.clickable
      )}
    >
      <CardContent
        props={{
          articlePath,
          sentenceText,
          rightText,
          rightNumber,
          isWinner
        }}
      />
    </NextLink>
  )
}

const CardContent: React.FC<{ props: Props }> = ({ props }) => {
  return (
    <>
      <p className={styles.header}>
        <span className={styles.text}>
          {props.articlePath} | {props.rightText}
        </span>
        {props.isWinner && (
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
          __html: props.sentenceText
        }}
      ></p>
    </>
  )
}

export default Card
