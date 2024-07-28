import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const useSearchContext = () => {
  const {searches, setSearches, filteredSearches, setFilteredSearches} = useContext(SearchContext)
  return { searches, setSearches, filteredSearches, setFilteredSearches } 
}

export default useSearchContext
