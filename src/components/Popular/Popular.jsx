import React, {useEffect} from 'react';
import PopularSwitcher from "./Popular-Switcher/Popular-Switcher";
import PopularItem from "./Popular-Item/Popular-Item";
import {ApiService} from "../../api/apiService";
import './Popular.css'

const Popular = () => {
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

  return (
    <>
      <PopularSwitcher setIsActiveHandler={setIsActiveHandler}
                       popularMenu={popularMenu}
                       isActive={isActive}/>
      <ul className="popular-box-wrapper">
        {popular.map(movie => <PopularItem key={movie.id} {...movie}/>)}
      </ul>
    </>
  );
};

export default Popular;