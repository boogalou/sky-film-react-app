import React from 'react'
import { apiConfig } from '../../config'
import { Link } from 'react-router-dom'

const PeopleItem = ({name, profile_path, id }) => {
  return (
    <>

        <div className="people-box">
          <div className="people-img">

            <img src={apiConfig.image.w500ImgURL + profile_path} alt="poster"/>
          </div>
          <Link to={`/people/${id}`}>
            { name }
          </Link>
        </div>

    </>
  )
}

export default PeopleItem