import React from 'react'
import './Popular-Item.css'
import {apiConfig} from '../../../config'
import {Link} from "react-router-dom";


const PopularItem = (props) => {
  const {id, title, name, release_date, first_air_date, poster_path,} = props;
  return (
    <>
      <li>
        <div className="popular-box">
          <div className="popular-b-img">
            <Link to={`/movie/${id}`}>
              {<img src={apiConfig.image.w500ImgURL + poster_path} alt="movie poster"/>}
            </Link>
          </div>

          <div className="popular-b-description">
            <span className={'title'}>
                <Link to={`/movie/${id}`}>{title || name}</Link>
                </span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>
    </>
  )
}

export default PopularItem;