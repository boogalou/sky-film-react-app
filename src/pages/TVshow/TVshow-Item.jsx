import React from 'react'
import { apiConfig } from '../../config'
import { Link } from 'react-router-dom'

const TVshowItem = ({id, original_name, poster_path}) => {
  return (
    <div>
      <div className="tvshow-box">
        <div className="tvshow-img">
          <div className="h-desc"></div>
          <img src={ apiConfig.baseImgURL + poster_path } alt="" />
        </div>
        <Link to="#">
          { original_name }
        </Link>
      </div>
    </div>
  )
}

export default TVshowItem;