import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import styles from './App.module.scss'
import classNames from 'classnames'
import { Article } from './types'
import ArticleData from './data/articles.json'

const cards: { sentence: string; article: string }[] = []

const convertToRoman = (num: number) => {
    if (isNaN(num)) return NaN
    const lookup: { [key: string]: number } = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let roman = ''
    let i
    for (i in lookup) {
        while (num >= lookup[i]) {
            roman += i
            num -= lookup[i]
        }
    }
    return roman
}

const articles: Article[] = ArticleData
for (let article of articles) {
    for (let paragraph of article.paragraphs) {
        for (let phrase of paragraph.phrases) {
            for (let part of phrase.parts) {
                for (let right of part.rights) {
                    const ids = [paragraph.id, phrase.id]
                    const allOne = ids.every(i => i === 1)

                    cards.push({
                        sentence: right.winnerSentence,
                        article: `Art ${article.id} ${convertToRoman(paragraph.id)} ${
                            !allOne || part.textAltered ? `${phrase.id} ` : ''
                        }${part.textAltered ? `${part.id}. Alt ` : ''}GG`
                    })
                }
            }
        }
    }
}

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {})

    return (
        <div className={styles.App}>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className={styles.logo} alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className={classNames(styles.logo, styles.react)}
                        alt="React logo"
                    />
                </a>
            </div>
            <div>
                {articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h3>Art {article.id}</h3>
                        </div>
                    )
                })}
            </div>
            <h1>Vite + React</h1>
            <div className={styles.card}>
                <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
        </div>
    )
}

export default App
