import React from 'react'
import { apiConfig } from '../../config'

const MovieItem = ({poster_path}) => {
  return (
    <>
      <div className="movies-box">
        <div className="movies-img">
          <div className="h-desc">lorem ipsum dolor</div>
          <img src={apiConfig.baseImgURL+poster_path} alt="poster"/>
        </div>
        <a href="#">
          Some description on movie
        </a>
      </div>
    </>
  )
}

export default MovieItem