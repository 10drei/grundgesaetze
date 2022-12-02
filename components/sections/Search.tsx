import styles from "./Search.module.css"
import SearchBadge from "../SearchBadge"
import { useState } from "react"

function Search() {
  const [search, setSearch] = useState("")

  const searchBadges = [
    "Artikel 1",
    "Menschenwürde",
    "Feminismus",
    "Hautfarbe",
    "Drogen",
    "Freiheit",
    "Krieg",
  ]

  return (
    <div className={styles.Search}>
      <input
        className={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="z.B. Menschenwürde"
      />
      <div className={styles.searchBadges}>
        {searchBadges.map((text) => (
          <SearchBadge
            key={text}
            text={text}
            active={text === search}
            onClick={() => setSearch(text)}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
