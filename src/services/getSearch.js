import axiosSearch from './searchInstance.js'

async function getSearch (type, searchQuery) {
  const params = new URLSearchParams(searchQuery)
  const search = await axiosSearch.get(`${type}?${params.toString()}`)
  return search
}

export default getSearch
