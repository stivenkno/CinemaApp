import { useState } from 'react'
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import SearchItems from './SearchItems'
import useSearches from '../hooks/useSearches'
import useFilteredSearches from '../hooks/useFilteredSearches'
import GenreSelector from './GenreSelector'
import './SearchBar.css'

function SearchBar () {
  const params = useParams()
  const { query: initialQuery, type: initialType } = useParams()
  const [query, setQuery] = useState(initialQuery ? initialQuery : '')
  const location = useLocation()
  const showResults = !location.pathname.includes('search')
  const showFilters = location.pathname !== '/'
  const canChoose = !location.pathname.includes('details') && !location.pathname.includes('search')
  const [type, setType] = useState(initialType ? initialType : 'movie')
  const { searches } = useSearches(query, type)
  const [filter, setFilter] = useState('')

  const { filteredSearches } = useFilteredSearches(searches, filter)

  return (
    <>
    
    <nav className='header-nav'>
      <div className='links-container'>
        <Link to='/' className='header-link'>Home</Link>
      </div>
      <div className='input-container'>

        {
          canChoose
            ? <select className='select-type' name='type' id='type' onChange={(e) => { setType(e.target.value) }}>
              <option value='movie'>Movies</option>
              <option value='tv'>TV Shows</option>
              <option value='person'>Persons</option>
              </select>
            : null
      }
        {
        showFilters && type !== 'person'
          ? <GenreSelector type={type} setFilter={setFilter} />
          : null
      }
        <input
          className='input-search' onChange={(event) => {
            setQuery(event.target.value)
          }}
        />
          {
            type === 'person'
              ? <Link to={`/search/${type}/${query}/1`} className='search-link'>Search</Link>
              : <Link to={`/search/${type}/${filter ? filter : 'all'}/${query}/1`} className='search-link'>Search</Link>
          }

      </div>
    </nav>
      {
        showResults
          ? <SearchItems type={type} searches={filteredSearches} />
          : null
      }
    </>

  )
}

export default SearchBar
