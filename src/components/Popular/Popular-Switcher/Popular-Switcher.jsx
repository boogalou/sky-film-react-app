import React from 'react'
import './Popular-Switcher.css'

const PopularSwitcher = ({ setIsActiveHandler, isActive, popularMenu }) => {
  const menuSelectorHandler = (value) => {
    setIsActiveHandler(value)
  }
  return (
    <>
      <div className="column_header_pop">
        <h2>Популярное</h2>

        <div className="selector_wrap_pop">
          <div className="selector_pop">
            <div
              className={isActive === null ? 'active' : ''}
              onClick={() => menuSelectorHandler(null)}
            >
              Онлайн
            </div>
            {popularMenu.map((item, index) => (
              <MenuItem
                key={`${item}_${index}`}
                item={item}
                menuSelectorHandler={menuSelectorHandler}
                activeItem={isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularSwitcher;

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
