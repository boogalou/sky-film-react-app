import React from 'react'

const MovieList = () => {
  return (
    <>
      <div className="movies-heading">
        <h2>Movies</h2>
      </div>
      <section id="movies-list">
        <div className="movies-box">
          <div className="movies-img">
            <div className="h-desc">lorem ipsum dolor</div>
            <img src="images/l-1.jpg" alt="" />
          </div>
          <a href="#">
            Some description on movie
          </a>
        </div>
        <div className="movies-box">
          <div className="movies-img">
            <img src="images/l-2.jpg" alt="" />
          </div>

          <a href="#">
            Some description on movie
          </a>
        </div>
        <div className="movies-box">
          <div className="movies-img">
            <img src="images/l-3.jpg" alt="" />
          </div>

          <a href="#">
            Some description on movie
          </a>
        </div>
        <div className="movies-box">
          <div className="movies-img">
            <img src="images/l-4.jpg" alt="" />
          </div>

          <a href="#">
            Some description on movie
          </a>
        </div>
      </section>
    </>
  )
}

export default MovieList