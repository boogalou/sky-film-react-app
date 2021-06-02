import React from 'react'
import './Trends-Switcher.css'

const TrendsSwitcher = ({ trendsMenu, activeItem, activeItemHandler }) => {

  const menuSelectorHandler = (value) => {
    activeItemHandler(value)
  }
  return (
    <>
      <div className="column_header_trend">
        <h2>Тренды</h2>

        <div className="selector_wrap_trend">
          <div className="selector_trend">
            <div
              className={activeItem === null ? 'active' : ''}
              onClick={() => menuSelectorHandler(null)}
            >
              Сегодня
            </div>
            {trendsMenu.map((item, index) => (
              <MenuItem
                key={`${item}_${index}`}
                item={item}
                menuSelectorHandler={menuSelectorHandler}
                activeItem={activeItem}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TrendsSwitcher;

const MenuItem = ({ item, menuSelectorHandler, activeItem }) => {

  return (
    <>
      <div
        className={activeItem === item ? 'active' : null}
        onClick={() => menuSelectorHandler(item)}
      >
        {item}
      </div>
    </>
  )
}
