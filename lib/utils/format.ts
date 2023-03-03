import styles from "../../components/SentenceCard.module.scss"

export function romanize(num: number) {
  if (isNaN(num)) return NaN
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ],
    roman = "",
    i = 3
  while (i--) roman = (key[+digits.pop()! + i * 10] || "") + roman
  return Array(+digits.join("") + 1).join("M") + roman
}

export function parseSentenceText(text: string) {
  let regex = new RegExp("__([^_]+)__", "g")

  const matches = text.matchAll(regex)
  for (let match of Array.from(matches)) {
    text = text.replace(
      match[0],
      `<span class="${styles.highlight}">${match[1]}</span>`
    )
  }
  return text
}
