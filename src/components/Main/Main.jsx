import React, {useEffect} from 'react'
import './Main.css'
import ShowcaseItem from './Showcase-Item/Showcase-Item'
import {ApiService} from '../../api/apiService'
import PopularItem from './Popular-Item/Popular-Item'
import PopularSwitcher from './Popular-Item/Popular-Switcher/Popular-Switcher'
import TrendsSwitcher from './Trends-Item/Trends-Switcher/Trends-Switcher'
import TrendsItem from './Trends-Item/Trends-Item'

const Main = () => {
  const getData = new ApiService();

  const popularMenu = ['По ТВ', 'В кинотеатрах'];
  const trendsMenu = ['За неделю'];

  const [isActive, setIsActive] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);
  const [mouse, setMouse] = React.useState([]);

  const [trailersData, setTrailersData] = React.useState([]);
  useEffect(() => {
    getData.getTrailers().then(data => setTrailersData(data));

  }, []);


  const [popular, setPopular] = React.useState([]);
  useEffect(() => {
    getData.getPopularity(isActive).then(data => setPopular(data));
  }, [isActive]);

  const [trends, setTrends] = React.useState([]);
  useEffect(() => {
    getData.getTrends(activeItem).then(data => setTrends(data));
  }, [activeItem]);

  const setIsActiveHandler = (activeMenuitem) => {
    setIsActive(activeMenuitem);
  };
  const activeItemHandler = (setValue) => {
    setActiveItem(setValue);
  };
  const mouseSpyHandler = (evt) => {
    setMouse(evt.target.src);
  }


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
        <div className="cover" style={{backgroundImage: `url(${mouse})`, backgroundSize: 'cover'}}>
          <div className="background" style={{backgroundColor: 'rgba(0,0,0, 0.5)'}}>
            <h1 className="showcase-heading">Трейлеры</h1>
            <ul className="showcase-box-wrapper">
              {trailersData.map(trailer => <ShowcaseItem key={trailer.id} {...trailer}
                                                         mouseSpyHandler={mouseSpyHandler}

              />)}
            </ul>
          </div>
        </div>
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