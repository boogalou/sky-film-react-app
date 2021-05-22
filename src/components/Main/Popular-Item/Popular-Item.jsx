import React from 'react'
import './Popular-Item.css'
import { apiConfig } from '../../../config'

const PopularItem = ({
  title,
  name,
  release_date,
  first_air_date,
  poster_path,
}) => {
  return (
    <>
      <li>
        <div className="popular-box">
          <div className="popular-b-img">
            <img src={`${apiConfig.baseImgURL}${poster_path}`}
                 alt="movie poster"/>
          </div>

          <div className="popular-b-description">
            <span className={'title'}>{title || name}</span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>

    </>
  )
}

export default PopularItem