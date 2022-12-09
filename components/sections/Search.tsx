import styles from "./Search.module.scss"
import SearchBadge from "../SearchBadge"
import Spinner from "../Spinner"

type Props = {
  search: string
  setSearch: (search: string) => void
  loading: boolean
}

function Search({ search, setSearch, loading }: Props) {
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
      <div className={styles.inputWrapper}>
        <input
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
            active={text === search}
            onClick={() => setSearch(text)}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
