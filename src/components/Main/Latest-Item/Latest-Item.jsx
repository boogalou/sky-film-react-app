import React from 'react'
import './Latest-Item.css'

const LatestItem = ({ title, release_date, poster_path }) => {

  return (
    <>
      <li>
        <div className="latest-box">
          <div className="latest-b-img">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="movie poster" />
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