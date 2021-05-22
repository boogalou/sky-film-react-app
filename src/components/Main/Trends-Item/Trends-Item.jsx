import React from 'react'
import './Trends-Item.css'
import { apiConfig } from '../../../config'

const TrendsItem = ({
  title,
  name,
  release_date,
  first_air_date,
  poster_path,
}) => {
  return (
    <>
      <li>
        <div className="trends-box">
          <div className="trends-b-img">
            <img src={`${apiConfig.baseImgURL}${poster_path}`}
                 alt="movie poster"/>
          </div>

          <div className="trends-b-description">
            <span className={'title'}>{title || name}</span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>

    </>
  )
}

export default TrendsItem