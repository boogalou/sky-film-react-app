import React from 'react'
import './Latest-Item.css'
import { apiConfig } from '../../../config'

const LatestItem = ({ title, release_date, poster_path }) => {
  return (
    <>
      <li>
        <div className="latest-box">
          <div className="latest-b-img">
            <img src={`${apiConfig.baseImgURL}${poster_path}`} alt="movie poster" />
          </div>

          <div className="latest-b-description">
            <strong>{ title }</strong>
            <p>{ release_date }</p>
          </div>
        </div>
      </li>

    </>
  )
}

export default LatestItem;