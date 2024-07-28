import axiosDetails from './detailsInstance.js'

async function getDetails (type, id, searchQuery) {
  const params = new URLSearchParams(searchQuery)
  const search = await axiosDetails.get(`${type}/${id}?${params.toString()}`)
  return search
}

export default getDetails
