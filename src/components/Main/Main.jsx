import React, { useEffect, useState } from 'react'
import ShowcaseItem from './Showcase-Item/Showcase-Item'
import { ApiService } from '../../api/apiService'
import LatestItem from './Latest-Item/Latest-Item'
import './Main.css'

const Main = () => {
  const trends = new ApiService();

  const [trending, setTrending] = useState([])

  useEffect(() => {
   trends.getTrends().then(result => setTrending(result))
  }, [])

  return (
    <>
      <section id="main">
        <h1 className="showcase-heading">Showcase</h1>
        <ul className="showcase-box-wrapper">

          <ShowcaseItem/>

        </ul>
      </section>

      <section id="latest">
        <h1 className="latest-heading">Latest Movies</h1>
        <ul className="latest-box-wrapper">

          {trending.map(movie => <LatestItem key={movie.id} {...movie}/>)}

        </ul>
      </section>

    </>
  )
}

export default Main