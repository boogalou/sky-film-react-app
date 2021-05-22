import React, { useEffect, useState } from 'react'
import './Main.css'
import ShowcaseItem from './Showcase-Item/Showcase-Item'
import { ApiService } from '../../api/apiService'
import PopularItem from './Popular-Item/Popular-Item'
import PopularSwitcher from './Popular-Item/Popular-Switcher/Popular-Switcher'
import TrendsSwitcher from './Trends-Item/Trends-Switcher/Trends-Switcher'
import TrendsItem from './Trends-Item/Trends-Item'

const Main = () => {
  const popularMenu = ['По ТВ', 'В кинотеатрах']
  const trendsMenu = ['На неделе']

  const getData = new ApiService()

  const [popular, setPopular] = useState([])
  const [isActive, setIsActive] = useState(null)

  const setIsActiveHandler = (activeMenuitem) => {
    setIsActive(activeMenuitem)
  }

  const [trends, setTrends] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  const activeItemHandler = (setValue) => {
    setActiveItem(setValue)
  }

  const [trailersData, setTrailersData] = useState([])

  useEffect(() => {
    getData.getTrailers().then(data => setTrailersData(data));
  }, [])

  useEffect(() => {
    getData.getPopularity(isActive).then(data => setPopular(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  useEffect(() => {
    getData.getTrends(activeItem).then(data => setTrends(data))
  }, [activeItem])

  return (
    <>
      <section id="popular">

        <PopularSwitcher setIsActiveHandler={setIsActiveHandler}
                         popularMenu={popularMenu}
                         isActive={isActive}/>

        <ul className="popular-box-wrapper">

          {popular.map(movie => <PopularItem key={movie.id} {...movie}/>)}

        </ul>
      </section>

      <section id="main">
        <h1 className="showcase-heading">Трейлеры</h1>
        <ul className="showcase-box-wrapper">

          {trailersData.map(trailer => <ShowcaseItem key={trailer.id} {...trailer} />) }

        </ul>
      </section>

      <section id="trends">

        <TrendsSwitcher activeItemHandler={activeItemHandler}
                        trendsMenu={trendsMenu}
                        activeItem={activeItem}/>

        <ul className="trends-box-wrapper">

          {trends.map(movie => <TrendsItem key={movie.id} {...movie}/>)}

        </ul>
      </section>
    </>
  )
}

export default Main