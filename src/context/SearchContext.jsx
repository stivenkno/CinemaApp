import {
  createContext, useContext,
  useState
} from 'react'

export const SearchContext = createContext()


export const SearchProvider = ({ children }) => {
  const [searches, setSearches] = useState([])
  const [filteredSearches, setFilteredSearches] = useState(searches)

  return (
    <SearchContext.Provider
      value={{
        searches,
        setSearches,
        filteredSearches,
        setFilteredSearches
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
