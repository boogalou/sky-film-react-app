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
          <li><Link to="/">Home</Link></li>
          <li><Link to="movies">Movies</Link></li>
          <li><Link to="tvshows">TV Shows</Link></li>
          <li><Link to="people">People</Link></li>
          <li><Link to="more">More</Link></li>
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