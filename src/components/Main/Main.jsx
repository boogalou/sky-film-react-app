import React, {useEffect, useState} from 'react'
import './Main.css'
import {ApiService} from '../../api/apiService'
import PopularItem from './Popular-Item/Popular-Item'
import PopularSwitcher from './Popular-Item/Popular-Switcher/Popular-Switcher'
import TrendsSwitcher from './Trends-Item/Trends-Switcher/Trends-Switcher'
import TrendsItem from './Trends-Item/Trends-Item'
import ModalWindow from "../common/Modal-window/ModalWindow";
import Trailers from "./Trailers/Trailers";

const Main = () => {
  const getData = new ApiService();

  const popularMenu = ['По ТВ', 'В кинотеатрах'];
  const trendsMenu = ['За неделю'];

  const [isActive, setIsActive] = React.useState(null);
  console.log('isActive:', isActive)
  const [activeItem, setActiveItem] = React.useState(null);

  const [activeModal, setActiveModal] = React.useState(false);


  const [popular, setPopular] = React.useState([]);
  useEffect(() => {
    getData.getPopularity(isActive).then(response => setPopular(response.results));
  }, [isActive]);

  const [trends, setTrends] = React.useState([]);
  useEffect(() => {
    getData.getTrends(activeItem).then(response => setTrends(response.results));
  }, [activeItem]);

  const setIsActiveHandler = (activeMenuitem) => {
    setIsActive(activeMenuitem);
  };
  const activeItemHandler = (setValue) => {
    setActiveItem(setValue);
  };


  const [trailerId, setTrailerId] = useState({})
  const getTrailerVideo = (id) => {
    setTrailerId(id);
  };


  return (

    <>
      <ModalWindow active={activeModal} setActive={setActiveModal} trailerId={trailerId}/>
      <div id="main-container">
        <section id="popular">
          <PopularSwitcher setIsActiveHandler={setIsActiveHandler}
                           popularMenu={popularMenu}
                           isActive={isActive}/>
          <ul className="popular-box-wrapper">
            {popular.map(movie => <PopularItem key={movie.id} {...movie}/>)}
          </ul>
        </section>

        <section id="trailers">
          <Trailers getTrailerVideo={getTrailerVideo}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal} />
        </section>

        <section id="trends">
          <TrendsSwitcher activeItemHandler={activeItemHandler}
                          trendsMenu={trendsMenu}
                          activeItem={activeItem}/>
          <ul className="trends-box-wrapper">
            {trends.map(movie => <TrendsItem key={movie.id} {...movie}/>)}

          </ul>
        </section>
      </div>

    </>
  )
}

export default Main;