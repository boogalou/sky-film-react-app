import React, { useState } from 'react'
import './Block-Menu.css'

const BlockMenu = ({ setIsActiveHandler, isActive }) => {
  const menu = ['По ТВ', 'Напрокат', 'В кинотеатрах'];
  const menuSelectorHandler = (value) => {
    setIsActiveHandler(value)
  }
  return (
    <>
      <div className="column_header">
        <h2>Популярное</h2>

        <div className="selector_wrap">
          <div className="selector">
            <div
              className={isActive === null ? 'active' : ''}
              onClick={() => menuSelectorHandler(null)}
            >
              Онлайн
            </div>
            {menu.map((item, index) => (
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

export default BlockMenu

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
