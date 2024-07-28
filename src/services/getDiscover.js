import axiosDiscover from './discoverInstance'

async function getDiscover (type, searchQuery) {
  const params = new URLSearchParams(searchQuery)
  const search = await axiosDiscover.get(`${type}?${params.toString()}`)
  return search
}

export default getDiscover
