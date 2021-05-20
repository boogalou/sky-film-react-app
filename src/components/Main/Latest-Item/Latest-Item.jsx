import React from 'react'
import './Latest-Item.css'
import { apiConfig } from '../../../config'

const LatestItem = ({
  title,
  name,
  release_date,
  first_air_date,
  poster_path,
}) => {
  return (
    <>
      <li>
        <div className="latest-box">
          <div className="latest-b-img">
            <img src={`${apiConfig.baseImgURL}${poster_path}`}
                 alt="movie poster"/>
          </div>

          <div className="latest-b-description">
            <span className={'title'}>{title || name}</span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>

    </>
  )
}

export default LatestItem