import type { ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { useSearchResultsStore } from '~/store/search-results-store'
import { SearchIcon } from '~/components/SVG'
import { navigateToSearch } from '../SearchMenu.helpers'
import styles from './SearchBar.module.css'
import { useAutoFocus } from '~/hooks'

interface SearchBarProps {
  isMenuOpen: boolean
  onFocus?: () => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  isMenuOpen,
  onFocus
}) => {
  const router = useRouter()
  const {
    searchQuery,
    selectedResultIndex,
    setSearchQuery,
    setSearchResults,
  } = useSearchResultsStore()
  const inputRef = useAutoFocus(isMenuOpen)

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (selectedResultIndex !== null) return
    navigateToSearch(searchQuery, router)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleResetForm = () => {
    inputRef.current?.focus()
    setSearchQuery('')
    setSearchResults([])
  }

  return (
    <form
      className={styles.searchBar}
      onSubmit={handleOnSubmit}
      onReset={handleResetForm}
    >
      <SearchIcon className={styles.searchIcon} />
      <input
        ref={inputRef}
        className={styles.searchBarInput}
        name='search_query'
        type='search'
        placeholder='Search'
        spellCheck={false}
        autoComplete='off'
        autoCorrect='off'
        required
        onChange={handleInputChange}
        onFocus={onFocus}
      />
      <input
        aria-label='Delete search query'
        className={clsx(
          styles.resetInput,
          searchQuery && styles.showResetInput,
        )}
        type='reset'
      />
    </form>
  )
}
