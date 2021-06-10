import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import { Route } from 'react-router-dom'
import TVshowList from './pages/TVshow/TVshow-List'
import MovieList from './pages/Movie/Movie-List'
import People from './pages/People/People'
import SearchResult from "./pages/Search-result/Search-result";
import DetailsPage from "./pages/Details-page/Details-Page";
import PeopleDetails from "./pages/People/People-Deatails";

function App() {

  const [switchPosition, setSwitchPosition] = React.useState(null);
  const switchPositionHandler = (value) => {
    setSwitchPosition(value)
  }


  return (
    <div className="main-container">
      <Header/>

      <Route exact path='/'>
        <Main switchPositionHandler={switchPositionHandler}/>
      </Route>

      <Route path='/movie' exact component={MovieList}/>
      <Route path='/movie/:id' component={DetailsPage} />


      <Route path='/tvshows' exact component={TVshowList}/>
      <Route path='/tvshows/:id' >
        <DetailsPage switchPosition={switchPosition}/>
        </Route>

      <Route path='/people' exaxt component={People}/>
      <Route path='/people/:id' component={PeopleDetails}/>

      <Route path='/search'  component={SearchResult}/>

      <Footer/>
    </div>
  )
}

export default App;
