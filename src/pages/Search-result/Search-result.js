import React from 'react';
import './Serach-result.css'

const SearchResult = () => {
  return (
    <>
      <div className=" main-container">
        <div className="content-container">
          <div className="search-details">
            <ul> Результаты
              <li>Фильмы 15</li>
              <li>Сериалы 6</li>
              <li>Люди 3</li>
              <li>Коллекции 5</li>
              <li>Компании 0</li>
            </ul>
          </div>
          <div className="details-container">
            <div className="poster">
              <div className="image">
                <a href=""><img src="./Снимок экрана 2021-05-23 210941.png" alt="" /></a>
              </div>
            </div>
            <div className="about">
              <div className="item-title"><span>Terminator 2 Judgment Day</span></div>
              <div className="release-date"><span>25 декабря 1991 г.</span></div>
              <div className="description">
            <span className="item-text">Война роботов и людей продолжается. Казалось, что человечество обречено на полное
              уничтожение. Но благодаря своему лидеру Джону Коннору у сопротивления появляется шанс победить. Не имея
              возможности убить Джона в реальном времени,</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
);
};

export default SearchResult;