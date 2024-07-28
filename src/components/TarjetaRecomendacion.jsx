import React from 'react'
import './TarjetaRecomendacion.css'
import starImage from '../imgs/star-symbol-icon.png' // Importa la imagen de la ruta correspondiente
import { Link } from 'react-router-dom' // Importa el componente Link de react-router-dom

// Las tarjetas de recomendación para cada pelicula
function TarjetaRecomendacion ({ rating, imgPath, alt, title, type, id }) {
  return (
    <Link to={`/details/${type}/${id}`} className='contenedor-pelicula'>
      <img className='imagen-tarjeta' src={imgPath} alt={alt} onError={(e) => {
            e.target.src = 'https://th.bing.com/th/id/OIP.iEE5Pq8P83xrKvMzG3g4GQE8DF?rs=1&pid=ImgDetMain'
          }} />
      <div className='contenedor-pelicula_informacion'>
        <div className='contenedor-rating'>
          <img className='rating-img' src={starImage} alt='rating' />
          <p className='rating-text'>{rating}</p>
        </div>
        <h4 className='title-text'>{title}</h4>
      </div>
    </Link>
  )
}

export default TarjetaRecomendacion
