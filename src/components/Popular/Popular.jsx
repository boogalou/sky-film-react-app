import React, {useEffect} from 'react';
import PopularSwitcher from "./Popular-Switcher/Popular-Switcher";
import PopularItem from "./Popular-Item/Popular-Item";
import {ApiService} from "../../api/apiService";
import './Popular.css'

const Popular = ({ switchPositionHandler }) => {
  const getData = new ApiService();
  const popularMenu = ['По ТВ', 'В кинотеатрах'];
  const [isActive, setIsActive] = React.useState(null);
  const setIsActiveHandler = (activeMenuitem) => {
    setIsActive(activeMenuitem);
  };

  const [popular, setPopular] = React.useState([]);
  useEffect(() => {
    getData.getPopularity(isActive).then(response => setPopular(response.results));
  }, [isActive]);

  switchPositionHandler(isActive)

  return (
    <>
      <PopularSwitcher setIsActiveHandler={setIsActiveHandler}
                       popularMenu={popularMenu}
                       isActive={isActive}/>
      <ul className="popular-box-wrapper">
        {popular.map(movie => <PopularItem key={movie.id} {...movie} switchPosition={isActive}/>)}
      </ul>
    </>
  );
};

export default Popular;