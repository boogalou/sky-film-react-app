import React from 'react'
import './Showcase-Item.css'
import {apiConfig} from '../../../config'
import PlayButton from "../../common/Play-button/Play-button";


const ShowcaseItem = ({backdrop_path, title, mouseSpyHandler,}) => {
  const backdrop = apiConfig.image.w780ImgURL + backdrop_path
  return (
    <>

      <li className='showcase-container'>
        <div className="showcase-box">

          <img src={backdrop} alt="movie poster"
               onMouseMove={mouseSpyHandler}/>
          <PlayButton className='play-button'/>
        </div>
        <div className='title-container'>
          <span className='movie-title'>
            {title}
          </span></div>
      </li>

    </>
  )
}

export default ShowcaseItem
