'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { getMovieTitles } from '~/actions/movies-actions'
import { useSearchResultsStore } from '~/store/search-results-store'
import { useMenu, useDebounce, } from '~/hooks'
import { CloseIcon, SearchIcon } from '~/components/SVG'
import { SearchBar } from './SearchBar'
import { SearchResults } from './SearchResults'
import styles from './SearchMenu.module.css'

interface SearchMenuProps {
  className?: string
}

const DEBOUNCE_DELAY = 280

export const SearchMenu: React.FC<SearchMenuProps> = ({
  className
}) => {
  const {
    menuRef,
    isMenuOpen,
    toggleMenu
  } = useMenu()
  const {
    menuRef: searchResultsRef,
    isMenuOpen: isSearchResultsOpen,
    openMenu: openSearchResults,
  } = useMenu(false)
  const { searchQuery, searchResults } = useSearchResultsStore()
  const { setSearchResults } = useSearchResultsStore()
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_DELAY)

  useEffect(() => {
    if (debouncedSearchQuery.length <= 2) {
      return setSearchResults([])
    }

    const fetchMovieTitles = async () => {
      try {
        const newSearchResults = await getMovieTitles(debouncedSearchQuery)
        setSearchResults(newSearchResults)
      } catch (error) {
        console.error(error)
        setSearchResults([])
      }
    }

    fetchMovieTitles()
  }, [debouncedSearchQuery, setSearchResults])

  return (
    <div
      ref={menuRef}
      className={className}
    >
      <button
        aria-label='Search movie'
        className={styles.searchMenuBtn}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <CloseIcon /> : <SearchIcon />}
      </button>

      <div
        ref={searchResultsRef}
        className={clsx(
          styles.searchMenu,
          isMenuOpen && styles.searchMenuOpen,
        )}
      >
        <SearchBar
          isMenuOpen={isMenuOpen}
          onFocus={openSearchResults}
        />
        {
          (searchResults.length > 0 && isSearchResultsOpen) && (
            <SearchResults />
          )
        }
      </div>
    </div>
  )
}
