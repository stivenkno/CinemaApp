import { useState, useEffect } from 'react'
import getSearch from '../services/getSearch'
import useSearchContext from './useSearchContext.jsx'

function useSearches (query, type, page = 1) {
  const {searches, setSearches} = useSearchContext()
  const [error, setError] = useState(false)

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await getSearch(type, {
          query,
          page
        })
        const search = data.results

        setSearches(search)
      } catch {
        setError(true)
      }
    }
    search()
  }, [query, type, page])

  return { searches, error, setSearches }
}

export default useSearches
