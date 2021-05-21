import React from 'react'
import { apiConfig } from '../../config'
import { Link } from 'react-router-dom'

const PeopleItem = ({name, profile_path }) => {
  return (
    <>

        <div className="people-box">
          <div className="people-img">

            <img src={apiConfig.baseImgURL + profile_path} alt="poster"/>
          </div>
          <Link to="#">
            { name }
          </Link>
        </div>

    </>
  )
}

export default PeopleItem