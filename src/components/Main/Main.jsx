import React, {useState} from 'react'
import './Main.css'
import ModalWindow from "../common/Modal-window/ModalWindow";
import Trailers from "../Trailers/Trailers";
import Trends from "../Trends/Trends";
import Popular from "../Popular/Popular";

const Main = () => {

  const [activeModal, setActiveModal] = React.useState(false);
  const [trailerId, setTrailerId] = useState({})
  const getTrailerVideo = (id) => {
    setTrailerId(id);
  };

  return (
    <>
      <ModalWindow active={activeModal} setActive={setActiveModal} trailerId={trailerId}/>
      <div id="main-container">
        <section id="popular">
          <Popular />
        </section>

        <section id="trailers">
          <Trailers getTrailerVideo={getTrailerVideo}
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}/>
        </section>

        <section id="trends">
          <Trends />
        </section>
      </div>

    </>
  )
}

export default Main;