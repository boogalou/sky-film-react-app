import React, {useEffect} from 'react'
import './Header.css'
import find_icon from '../../assets/img/find_icon.svg'
import main_logo from '../../assets/img/main_logo.svg'
import {Link} from 'react-router-dom'
import {ApiService} from '../../api/apiService'
import SearchList from "../Search-List/Search-List";

const Header = () => {

  const apiSearch = new ApiService()

  const [isFetching, setIsFetching] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState({});
  console.log('header:', searchResult)
  const searchValueHandler = (evt) => {
    setSearchValue(evt.target.value);
  }

  useEffect(() => {
    const searchQuery = async () => {
      const response = await apiSearch.search(searchValue);
      setSearchResult(response);
      setIsFetching(false);
    }
    searchQuery();
  }, [searchValue])

  return (
    <>
      <nav>
        <Link to="/" className='logo'>
          <img src={main_logo} alt="site-logo"/>
        </Link>

        <ul className="menu">
          <li><Link to='/'>Главная</Link></li>
          <li><Link to='/movie'>Фильмы</Link></li>
          <li><Link to='/tvshows'>Сериалы</Link></li>
          <li><Link to='/people'>Люди</Link></li>
        </ul>

        <div className='search'>

          <input type="text"
                 placeholder="Найти фильм..."
                 onChange={searchValueHandler}
                 value={searchValue}
          />
          <ul className={searchValue ? `search_list active` : 'search_list'}>
            {searchResult.results && searchResult.results.map(item => <SearchList key={item.id} {...item} />)}

          </ul>
          <img src={find_icon} alt="find_icon" width='9%'/>
        </div>

      </nav>

    </>
  )
}

export default Header;