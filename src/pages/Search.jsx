import { useEffect, useState } from 'react'
import useSearchContext from '../hooks/useSearchContext';
import { useParams, useNavigate } from 'react-router-dom';
import useFilteredSearches from '../hooks/useFilteredSearches';
import useSearches from '../hooks/useSearches';
import './Search.css'
import TarjetaRecomendacion from '../components/TarjetaRecomendacion';
function Search () {
  const { type, genre, query, page: initialPage } = useParams()
  const [page, setPage] = useState(initialPage ? parseInt(initialPage) : 1)
  const { searches } = useSearchContext()
  const navigate = useNavigate()
  useSearches(query, type, page)
  const genreToFilter = genre !== 'all' ? genre : ''
  const { filteredSearches }  = useFilteredSearches(searches, genreToFilter)

  return (
    <div className='searches-container'>
      <h1>Search</h1>
      <div className='searches-container-items'>
      {filteredSearches.map((search) => (
        <TarjetaRecomendacion key={search.id} title={search.title || search.name || 'Title'} rating={search.vote_average || 5} imgPath={`https://image.tmdb.org/t/p/w200${search.poster_path}`} alt={search.title || search.name || 'Name'} type={type} id={search.id} />
      ))}
      </div>
      <div className="button-container">
        <button className="page-button" onClick={() => { 
          setPage(page - 1)
          navigate(`/search/${type}/${genre}/${query}/${page - 1}`)
        }} disabled={page === 1}>Anterior</button>
        <button className="page-button" onClick={() => { 
          navigate(`/search/${type}/${genre}/${query}/${page + 1}`)
          setPage(page + 1)
        }}>Siguiente</button>
      </div> 
    </div>
  )
}

export default Search
