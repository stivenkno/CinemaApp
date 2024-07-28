import React, { useEffect, useState } from "react";
import "./Home.css";
import TarjetaRecomendacion from "../components/TarjetaRecomendacion";
import getDiscover from "../services/getDiscover";
import Person from "../components/Person";
import SearchBar from "../components/SearchBar";

function PaginaPrincipal() {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const [mostPopularSeries, setMostPopularSeries] = useState([]);
  const [mostPopularPeople, setMostPopularPeople] = useState([]);

  useEffect(() => {
    const searchPopularMovies = async () => {
      try {
        const { data } = await getDiscover("movie", {
          page: 1,
        });
        const movies = data.results.slice(0, 5);

        setMostPopularMovies(movies);
      } catch (error) {}
    };
    const searchPopularSeries = async () => {
      try {
        const { data } = await getDiscover("tv", {
          page: 1,
        });
        const series = data.results.slice(0, 5);

        setMostPopularSeries(series);
      } catch (error) {}
    };

    const searchPopularPeople = async () => {
      try {
        const { data } = await getDiscover("person", {
          page: 1,
        });
        const people = data.results.slice(0, 5);
        setMostPopularPeople(people);
      } catch (error) {}
    };

    searchPopularMovies();
    searchPopularSeries();
    searchPopularPeople();
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        <div>
        <h2>Popular movies</h2>
          <div className="principal-contenedor-recomendaciones">
            
            {mostPopularMovies.map((movie) => (
              <TarjetaRecomendacion
                key={movie.id}
                title={movie.title || movie.name || "Title"}
                rating={movie.vote_average || 5}
                imgPath={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title || movie.name || "Name"}
                type="movie"
                id={movie.id}
              />
            ))}
          </div>
        </div>

        <div>
          <h2>Popular series</h2>
          <div className="principal-contenedor-recomendaciones">
            {mostPopularSeries.map((serie) => (
              <TarjetaRecomendacion
                key={serie.id}
                title={serie.title || serie.name || "Title"}
                rating={serie.vote_average || 5}
                imgPath={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                alt={serie.title || serie.name || "Name"}
                id={serie.id}
                type="tv"
              />
            ))}
          </div>
        </div>
        <div>
          <h2>Popular celebreties</h2>
          <div className='principal-contenedor-recomendaciones'>
            {
            mostPopularPeople.map((person) => (
              <Person
                key={person.id}
                imageFilePath={person.profile_path}
                personName={person.name}
                valoratePerson={person.popularity}
                id={person.id}
              />
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginaPrincipal;
