import React from 'react'
import { apiConfig } from '../../config'
import { Link } from 'react-router-dom'

const MovieItem = ({poster_path, title, id}) => {
  return (
    <>
      <div className="movies-box">
        <div className="movies-img">

          <img src={apiConfig.image.w500ImgURL + poster_path} alt="poster"/>
        </div>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </div>
    </>
  )
}

export default MovieItem