import axiosDetails from './detailsInstance.js'

// Esta función consigue el contenido similar de una pelicula o tv show
async function getDetails (type, id) {
  const search = await axiosDetails.get(`${type}/${id}/similar`)
  return search
}

export default getDetails
