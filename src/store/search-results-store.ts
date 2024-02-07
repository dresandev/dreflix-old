import { create } from 'zustand'
import { MovieTitle } from '~/models'

interface SearchResultsState {
  searchQuery: string
  searchResults: MovieTitle[]
  selectedResultIndex: number | null
  setSearchQuery: (searchQuery: string) => void
  setSearchResults: (searchResults: MovieTitle[]) => void
  setSelectedResultIndex: (selectedResultIndex: number | null) => void
}

export const useSearchResultsStore = create<SearchResultsState>(set => ({
  searchQuery: '',
  searchResults: [],
  selectedResultIndex: null,
  setSearchQuery: (searchQuery) => set(state => ({
    searchQuery,
  })),
  setSearchResults: (searchResults) => set(state => ({
    searchResults,
  })),
  setSelectedResultIndex: (selectedResultIndex) => set(state => ({
    selectedResultIndex,
  })),
}))
