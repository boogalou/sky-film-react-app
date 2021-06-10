import React from 'react'
import './Trends-Item.css'
import {apiConfig} from '../../../config'
import {Link} from "react-router-dom";

const TrendsItem = (props) => {
  const {title, name, release_date, first_air_date, poster_path, id} = props;

  return (
    <>
      <li>
        <div className='trends-box'>
          <div className='trends-b-img'>
            <Link to={`/movie/${id}`}>
              <img src={apiConfig.image.w500ImgURL + poster_path} alt='poster'/>
            </Link>
          </div>
          <div className='trends-b-description'>
            <span className={'title'}>
              <Link to={`/movie/${id}`}>
                {title || name}
              </Link>
            </span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default TrendsItem;