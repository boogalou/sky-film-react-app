import React from 'react'
import './Header.css'
import find_icon from '../../assets/img/find_icon.svg'
import main_logo from '../../assets/img/main_logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/" className='logo'>
          <img src={main_logo} alt="site-logo" />
        </Link>


        <ul className="menu">
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='movies'>Фильмы</Link></li>
          <li><Link to='tvshows'>Сериалы</Link></li>
          <li><Link to='people'>Актеры</Link></li>
        </ul>

        <div className='search'>
          <input type="text" placeholder="Найти фильм..." />


            <img src={find_icon} alt="find_icon" width="9%" />
        </div>
      </nav>
    </>
  )
}

export default Header;