import styles from "./Search.module.scss"
import SearchBadge from "../SearchBadge"
import Spinner from "../Spinner"
import { useEffect, useState } from "react"

type Props = {
  search: string
  setSearch: (search: string) => void
  loading: boolean
}

function Search({ search, setSearch, loading }: Props) {
  const [searchValue, setSearchValue] = useState(search)
  const searchBadges = [
    "Artikel 1",
    "Menschenwürde",
    "Feminismus",
    "Hautfarbe",
    "Drogen",
    "Freiheit",
    "Krieg"
  ]

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchValue)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchValue, setSearch])

  return (
    <div className={styles.Search}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchInput}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="z.B. Menschenwürde"
        />
        {loading && <Spinner className={styles.loader} />}
      </div>

      <div className={styles.searchBadges}>
        {searchBadges.map((text) => (
          <SearchBadge
            key={text}
            text={text}
            active={text === searchValue}
            onClick={() => {
              setSearchValue(text)
              setSearch(text)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
