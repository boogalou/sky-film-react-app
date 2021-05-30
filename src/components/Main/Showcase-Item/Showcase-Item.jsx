import React from 'react'
import './Showcase-Item.css'
import {apiConfig} from '../../../config'
import {motion} from "framer-motion";
import play_icon from "../../../assets/img/play_icon.svg";


const ShowcaseItem = (props) => {
  const {id, backdrop_path, title, mouseSpyHandler, setActiveM, getTrailerVideo} = props;


  const clickHandler = () => {
    setActiveM(true);
    getTrailerVideo({movie_id: +id})
  }
  return (
    <>
      <li className='showcase-container'>
        <PlayButton clickHandler={ clickHandler }/>
        <div className="showcase-box" onClick={clickHandler}>
          <motion.img src={apiConfig.image.w780ImgURL + backdrop_path} alt="movie poster"
                      onMouseMove={mouseSpyHandler}
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.99}}
          />
        </div>
        <div className='title-container'>
          <span className='movie-title'>
            {title}
          </span></div>
      </li>
    </>
  )
}

export default ShowcaseItem


const PlayButton = ({clickHandler, id}) => {


  const middleMan = () => {
    clickHandler(true, id)

  }

  return (
    <div className='button-container' >
      <div className='play-button' onClick={middleMan}>
        <motion.img src={play_icon} alt="play button"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.95}}
        />
      </div>
    </div>

  );
};
