import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { Route } from 'react-router-dom'
import TVshowList from './pages/TVshow/TVshow-List'
import MovieList from './pages/Movie/Movie-List'
import People from './pages/People/People'
import SearchResult from "./pages/Search-result/Search-result";

function App () {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="main-container">
      <Header/>
      <Route exact path='/'>
        <Main />
      </Route>

      <Route path='/movies'>
        <MovieList />
      </Route>

      <Route path='/tvshows'>
        <TVshowList />
      </Route>

      <Route path='/people'>
          <People />
      </Route>

      <Route path='/search'>
        <SearchResult />
      </Route>

      <Footer />
    </div>
  )
}

export default App
