import React, { useEffect, useState } from 'react'
import MovieItem from './Movie-Item'
import { ApiService } from '../../api/apiService'
import './Movie-List.css'



const MovieList = () => {
  const movies = new ApiService();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    movies.getMovies()
      .then(response => setFilms(response.results))
  }, [])

  return (
    <>
      <div className="movies-heading">
        <h2>Фильмы</h2>
      </div>
      <section id="movies-list">

        {films.map(film => <MovieItem key={film.id} {...film} /> ) }

      </section>
    </>
  )
}

export default MovieList