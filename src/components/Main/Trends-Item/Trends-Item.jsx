import React from 'react'
import './Trends-Item.css'
import {apiConfig} from '../../../config'

const TrendsItem = (props) => {
  const {title, name, release_date, first_air_date, poster_path,} = props;

  return (
    <>
      <li>
        <div className='trends-box'>
          <div className='trends-b-img'>
            <img src={apiConfig.image.w500ImgURL + poster_path} alt='poster'/>
          </div>
          <div className='trends-b-description'>
            <span className={'title'}>{title || name}</span>
            <span className={'release'}>{release_date || first_air_date}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default TrendsItem;