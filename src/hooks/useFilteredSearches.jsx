import { useEffect, useState } from 'react'
import useSearchContext from './useSearchContext'

function useFilteredSearches (searches, filters) {
  const {filteredSearches, setFilteredSearches} = useSearchContext()

  useEffect(() => {
    if (filters.length !== 0) {
      const filtered = searches.filter((searchItem) => {
        return searchItem.genre_ids.some((genre) => filters.includes(genre))
      })
      setFilteredSearches(filtered)
    } else {
      setFilteredSearches(searches)
    }
  }, [filters, searches])

  return { filteredSearches, setFilteredSearches }
}

export default useFilteredSearches
