import React, {useEffect} from 'react';
import TrendsSwitcher from "./Trends-Item/Trends-Switcher/Trends-Switcher";
import TrendsItem from "./Trends-Item/Trends-Item";
import {ApiService} from "../../api/apiService";
import './Trends.css'

const Trends = () => {
  const getData = new ApiService();
  const trendsMenu = ['За неделю'];
  const [activeItem, setActiveItem] = React.useState(null);

  const [trends, setTrends] = React.useState([]);
  useEffect(() => {
    getData.getTrends(activeItem).then(response => setTrends(response.results));
  }, [activeItem]);


  const activeItemHandler = (setValue) => {
    setActiveItem(setValue);
  };

  return (
    <>
      <TrendsSwitcher activeItemHandler={activeItemHandler}
                      trendsMenu={trendsMenu}
                      activeItem={activeItem}/>
      <ul className="trends-box-wrapper">
        {trends.map(movie => <TrendsItem key={movie.id} {...movie}/>)}

      </ul>
    </>
  );
};

export default Trends;