import React from 'react'
import { apiConfig } from '../../config'
import { Link } from 'react-router-dom'

const MovieItem = ({poster_path, title}) => {
  return (
    <>
      <div className="movies-box">
        <div className="movies-img">

          <img src={apiConfig.baseImgURL+poster_path} alt="poster"/>
        </div>
        <Link to="#">
          {title}
        </Link>
      </div>
    </>
  )
}

export default MovieItem