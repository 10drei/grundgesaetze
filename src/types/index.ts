export interface Article {
    // Artikel
    id: number
    paragraphs: Paragraph[]
}

export interface Paragraph {
    // Absatz
    id: number
    text: string
    phrases: Phrase[]
}

export interface Phrase {
    // Satz
    id: number
    text: string
    parts: Part[]
}

export interface Part {
    // Wortlaut
    id: number
    textAltered: boolean
    text: string
    rights: Right[]
}

export interface Right {
    // Grundrecht
    name: string
    winnerSentence: string
    alternativeSentences: string[]
}
