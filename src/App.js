import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { Route } from 'react-router-dom'
import TVshowList from './pages/TVshow/TVshow-List'
import MovieList from './pages/Movie/Movie-List'
import People from './pages/People/People'

function App () {
  return (
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

      <Footer />
    </div>
  )
}

export default App
