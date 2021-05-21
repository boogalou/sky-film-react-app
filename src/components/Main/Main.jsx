import React, { useEffect, useState } from 'react'
import ShowcaseItem from './Showcase-Item/Showcase-Item'
import { ApiService } from '../../api/apiService'
import LatestItem from './Latest-Item/Latest-Item'
import './Main.css'
import BlockMenu from './Block-Menu/Block-Menu'

const Main = () => {
  const menu = ['По ТВ', 'В кинотеатрах']

  const popularity = new ApiService()
  console.log(popularity)
  const [popular, setPopular] = useState([])
  const [isActive, setIsActive] = useState(null)

  const setIsActiveHandler = (activeMenuitem) => {
    setIsActive(activeMenuitem)
  }

  useEffect(() => {
    popularity.getPopularity(isActive).then(result => setPopular(result))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  return (
    <>
      <section id="main">
        <h1 className="showcase-heading">Showcase</h1>
        <ul className="showcase-box-wrapper">

          <ShowcaseItem/>

        </ul>
      </section>

      <section id="latest">

        <BlockMenu setIsActiveHandler={setIsActiveHandler} menu={menu}
                   isActive={isActive}/>

        <ul className="latest-box-wrapper">

          {popular.map(movie => <LatestItem key={movie.id} {...movie}/>)}

        </ul>
      </section>

    </>
  )
}

export default Main