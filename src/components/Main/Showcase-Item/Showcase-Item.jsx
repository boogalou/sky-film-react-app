import React from 'react'
import './Showcase-Item.css'
import { apiConfig } from '../../../config'


const ShowcaseItem = ({ poster_path, backdrop_path, title }) => {

  return (
    <>
      <li className='showcase-container'>
        <div className="showcase-box">
          <img src={apiConfig.baseImgURL + backdrop_path} alt="movie poster"/>
        </div>
        <span className='movie-title'>{title}</span>
      </li>
    </>
  )
}

export default ShowcaseItem
