import React from 'react'
import styles from './Trailers-Item.module.css'
import {apiConfig} from '../../../config'
import {motion} from "framer-motion";
import play_icon from "../../../assets/img/play_icon.svg";


const TrailersItem = (props) => {
  const {id, backdrop_path, title, mouseSpyHandler, setActiveM, getTrailerVideo} = props;


  const clickHandler = () => {
    setActiveM(true);
    getTrailerVideo({movie_id: +id})
  }
  return (
    <>
      <li className={styles.showcase_container}>
        <PlayButton clickHandler={ clickHandler }/>
        <div className={styles.showcase_box} onClick={clickHandler}>
          <motion.img src={ apiConfig.image.w780ImgURL + backdrop_path } alt="movie poster"
                      onMouseMove={mouseSpyHandler}
                      whileHover={{scale: 1.02}}
                      whileTap={{scale: 0.99}}
          />
        </div>
        <div className={styles.title_container}>
          <span className={ styles.movie_title }>
            {title}
          </span></div>
      </li>
    </>
  )
}

export default TrailersItem


const PlayButton = ({clickHandler, id}) => {


  const middleMan = () => {
    clickHandler(true, id)

  }

  return (
    <div className={styles.button_container} >
      <div className={styles.play_button} onClick={middleMan}>
        <motion.img src={play_icon} alt="play button"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.95}}
        />
      </div>
    </div>

  );
};
