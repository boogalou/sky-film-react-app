import React from 'react'
import './Header.css'
import find_icon from '../../assets/img/find_icon.svg'
import main_logo from '../../assets/img/main_logo.svg'

const Header = () => {
  return (
    <>
      <nav>
        <a href="#" className='logo'>
          <img src={main_logo} alt="site-logo" />
        </a>


        <ul className='menu'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Persones</a></li>
          <li><a href="#">Horror</a></li>
        </ul>

        <div className='search'>
          <input type="text" placeholder="Find you movies..." />


            <img src={find_icon} alt="find_icon" width="9%" />
        </div>
      </nav>
    </>
  )
}

export default Header;