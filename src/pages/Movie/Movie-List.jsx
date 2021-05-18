import React, { useEffect, useState } from 'react'
import MovieItem from './Movie-Item'
import { ApiService } from '../../api/apiService'
import './Movie-List.css'



const MovieList = () => {
  const movies = new ApiService();

  const [films, setFilms] = useState([]);

  console.log(films);

  useEffect(() => {
    movies.getMovies()
      .then(data => setFilms(data))
  }, [])

  return (
    <>
      <div className="movies-heading">
        <h2>Movies</h2>
      </div>
      <section id="movies-list">

        {films.map(film => <MovieItem key={film.id} {...film} /> ) }

      </section>
    </>
  )
}

export default MovieList