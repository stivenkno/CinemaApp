import { Routes, Route } from 'react-router-dom'
import DetailsInformation from './pages/DetailsInformation'
import './App.css'
import PaginaPrincipal from './pages/Home'
import SearchBar from './components/SearchBar'
import Search from './pages/Search'
import SearchPerson from './pages/SearchPerson'
import { SearchProvider } from './context/SearchContext'

function App () {
  return (
    <>
      <div>
        <SearchProvider>
          <SearchBar />
          <Routes>
            <Route path='/' element={<PaginaPrincipal />} />
            <Route path='/details/:type/:id' element={<DetailsInformation />} />
            <Route path='/search/:type/:genre/:query/:page' element={<Search />} />
            <Route path='/search/:type/:query/:page' element={<SearchPerson />} />
          </Routes>
        </SearchProvider>
      </div>
    </>
  )
}

export default App
