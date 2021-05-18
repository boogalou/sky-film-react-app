import React from 'react'
import './Showcase-Item.css'

const ShowcaseItem = () => {
  return (
    <>
      <li>
        <div className="showcase-box">
          <img src="./images/s-1.jpg" alt="" />
        </div>
      </li>
      <li>
        <div className="showcase-box">
          <img src="./images/s-2.jpg" alt="" />
        </div>
      </li>
      <li>
        <div className="showcase-box">
          <img src="./images/s-3.jpg" alt="" />
        </div>
      </li>
      <li>
        <div className="showcase-box">
          <img src="./images/s-4.jpg" alt="" />
        </div>
      </li>
      <li>
        <div className="showcase-box">
          <img src="./images/s-5.png" alt="" />
        </div>
      </li>
    </>
  )
}

export default ShowcaseItem;