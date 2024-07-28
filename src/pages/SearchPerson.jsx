import { useEffect, useState } from 'react'
import useSearchContext from '../hooks/useSearchContext';
import { useParams, useNavigate } from 'react-router-dom';
import useSearches from '../hooks/useSearches';
import './Search.css'
import Person from '../components/Person.jsx'
function SearchPerson () {
  const { type, query, page: initialPage } = useParams()
  const [page, setPage] = useState(initialPage ? parseInt(initialPage) : 1)
  const { searches } = useSearchContext()
  const navigate = useNavigate()
  useSearches(query, type, page)

  return (
    <div className='searches-container'>
      <h1>Search</h1>
      <div className='searches-container-items'>
      {searches.map((person) => (
              <Person
                key={person.id}
                imageFilePath={person.profile_path}
                personName={person.name}
                valoratePerson={person.popularity}
                id={person.id}
              />
      ))}
      </div>
      <div className="button-container">
        <button className="page-button" onClick={() => { 
          setPage(page - 1)
          navigate(`/search/${type}/${query}/${page - 1}`)
        }} disabled={page === 1}>Anterior</button>
        <button className="page-button" onClick={() => { 
          navigate(`/search/${type}/${query}/${page + 1}`)
          setPage(page + 1)
        }}>Siguiente</button>
      </div> 
    </div>
  )
}

export default SearchPerson
