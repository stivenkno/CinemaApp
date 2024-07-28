import { Link } from 'react-router-dom'
import './SearchBar.css'

const returnName = (searchItem, type) => {
  if (type === 'movie') return searchItem.title
  else if (type === 'tv') return searchItem.name
  else if (type === 'person') return searchItem.name
}

const returnImage = (searchItem) => {
  if (searchItem.poster_path) return `https://image.tmdb.org/t/p/w500${searchItem.poster_path}`
  else if (searchItem.profile_path) return `https://image.tmdb.org/t/p/w500${searchItem.profile_path}`
  else return 'https://th.bing.com/th/id/OIP.iEE5Pq8P83xrKvMzG3g4GQE8DF?rs=1&pid=ImgDetMain'
}

function SearchItem ({ searchItem, type }) {
  return (
    <div className='search' key={searchItem.id}>
      <Link to={`/details/${type}/${searchItem.id}`}>
        <img
          onError={(e) => {
            e.target.src = 'https://th.bing.com/th/id/OIP.iEE5Pq8P83xrKvMzG3g4GQE8DF?rs=1&pid=ImgDetMain'
          }} src={returnImage(searchItem)} alt={returnName(searchItem)}
        />
        <p>
          {
              returnName(searchItem, type)
            }
        </p>
      </Link>
    </div>
  )
}

export default SearchItem
