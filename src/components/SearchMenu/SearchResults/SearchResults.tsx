import { useEffect, useRef, } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useSearchResultsStore } from '~/store/search-results-store'
import { navigateToSearch } from '../SearchMenu.helpers'
import styles from './SearchResults.module.css'

export const SearchResults = ({
}) => {
  const router = useRouter()
  const resultsRef = useRef<HTMLUListElement>(null)
  const {
    searchResults,
    selectedResultIndex,
    setSelectedResultIndex,
  } = useSearchResultsStore()

  useEffect(() => {
    setSelectedResultIndex(null)
  }, [searchResults, setSelectedResultIndex])

  useEffect(() => {
    if (!resultsRef.current) return

    const handleKeydown = ({ key }: KeyboardEvent) => {
      if (key === 'ArrowUp') {
        setSelectedResultIndex(
          (selectedResultIndex === null || selectedResultIndex === 0)
            ? searchResults.length - 1
            : Math.max(selectedResultIndex - 1, 0)
        )
      }

      if (key === 'ArrowDown') {
        setSelectedResultIndex(
          (selectedResultIndex === null || selectedResultIndex === searchResults.length - 1)
            ? 0
            : Math.min(selectedResultIndex + 1, searchResults.length - 1)
        )
      }

      if (key === 'Enter') {
        if (selectedResultIndex === null) return

        const title = searchResults[selectedResultIndex].title
        navigateToSearch(title, router)
      }
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [router, searchResults, selectedResultIndex, setSelectedResultIndex])

  return (
    <ul
      ref={resultsRef}
      className={styles.results}
    >
      {
        searchResults.map(({ id, title }, i) => {
          const searchParams = new URLSearchParams({ search_query: title }).toString()
          return (
            <li key={id}>
              <Link
                tabIndex={-1}
                className={clsx(
                  styles.resultLink,
                  selectedResultIndex === i && styles.selectedOption
                )}
                href={`/search?${searchParams}`}
              >
                {title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
