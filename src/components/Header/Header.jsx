import React from 'react'
import './Header.css'
import find_icon from '../../assets/img/find_icon.svg'
import main_logo from '../../assets/img/main_logo.svg'
import {Link, Redirect} from 'react-router-dom'
import {ApiService} from '../../api/apiService'

const Header = () => {

  const apiSearch = new ApiService()

  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);


  const searchValueHandler = (evt) => {
    setSearchValue(evt.target.value);
    apiSearch.search(searchValue).then(response => setSearchResult(response));
  }



  return (
    <>
      <nav>
        <Link to="/" className='logo'>
          <img src={main_logo} alt="site-logo"/>
        </Link>

        <ul className="menu">
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='movies'>Фильмы</Link></li>
          <li><Link to='tvshows'>Сериалы</Link></li>
          <li><Link to='people'>Люди</Link></li>
        </ul>

        <div className='search'>
          <input type="text"
                 // onKeyDown={onKeyDownHandler}
                 placeholder="Найти фильм..."
                 onChange={searchValueHandler}
                 value={searchValue}
          />


          <img src={find_icon} alt="find_icon" width='9%'/>
        </div>
      </nav>
    </>
  )
}

export default Header;