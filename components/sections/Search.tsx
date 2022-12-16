import styles from "./Search.module.scss"
import SearchBadge from "../SearchBadge"
import Spinner from "../Spinner"
import { useEffect, useState } from "react"
import searchBadges from "./searchBadges"
import refreshIcon from "../../public/refresh-outline.svg"
import Image from "next/image"

type Props = {
  search: string
  setSearch: (search: string) => void
  loading: boolean
}

function Search({ search, setSearch, loading }: Props) {
  const [searchValue, setSearchValue] = useState(search)
  const [uniqueBadges, setUniqueBadges] = useState<string[]>([])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearch(searchValue)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchValue, setSearch])

  useEffect(() => {
    loadRandomBadges()
  }, [])

  const loadRandomBadges = () => {
    const _uniqueBadges: string[] = []
    while (_uniqueBadges.length < 5) {
      const randomBadge =
        searchBadges[Math.floor(Math.random() * searchBadges.length)]
      if (!_uniqueBadges.includes(randomBadge)) {
        _uniqueBadges.push(randomBadge)
      }
    }
    setUniqueBadges(_uniqueBadges)
  }

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
        {uniqueBadges.map((text) => (
          <SearchBadge
            key={text}
            active={text === searchValue}
            onClick={() => {
              setSearchValue(text)
              setSearch(text)
            }}
          >
            {text}
          </SearchBadge>
        ))}
        <SearchBadge
          className={styles.reloadBadge}
          onClick={loadRandomBadges}
          active={false}
        >
          <Image width={"20"} src={refreshIcon} alt="Neu laden" />
        </SearchBadge>
      </div>
    </div>
  )
}

export default Search
