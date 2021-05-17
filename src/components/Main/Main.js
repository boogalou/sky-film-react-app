import React from 'react'

const Main = () => {
  return (
    <>
      <section id="main">

        <h1 className="showcase-heading">Showcase</h1>
        <ul className="showcase-box-wrapper">
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
        </ul>

      </section>
    </>
  )
}

export default Main