import React, {useEffect} from 'react';
import styles from './ModalWindow.module.css'
import {ApiService} from "../../../api/apiService";

const ModalWindow = ({ active, setActive, trailerId}) => {

  const getData = new ApiService();

  const [isFetching, setIsFetching] = React.useState(false);
  const [trailerVideo, setTrailerVideo] = React.useState([]);

  useEffect(() => {
    setIsFetching(true);
    getData.getTrailersForId(trailerId).then(response => setTrailerVideo(response.results[0].key));
    setIsFetching(false);
  },[trailerId])

console.log(trailerVideo)

  return (
    <>
      {
        isFetching
        ? <h1>Loading...</h1>
        : <div className={styles.modal_container} onClick={() => setActive(false)}>
          <div className={active ? `${styles.modal_window_content} ${styles.active}` : styles.modal_window_content}>
            <div className={styles.player}>
              <iframe width="960" height="480" src={`https://www.youtube.com/embed/${trailerVideo}`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ModalWindow;