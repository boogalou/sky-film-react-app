import React from 'react';
import {useParams} from 'react-router-dom';
import {ApiService} from "../../api/apiService";
import styles from './Details-Page.module.css'
import {apiConfig} from "../../config";

const DetailsPage = () => {

  const getData = new ApiService();
  const ID = {movie_id: +useParams().id};


  const [movieId, setMovieId] = React.useState([]);

  React.useEffect(() => {
    getData.getMovieForId(ID).then(response => setMovieId(response));
  }, []);

  const crew = movieId && movieId.credits && movieId.credits.crew
console.log(crew && crew.map(item => console.log(item.known_for_department)))

  const { title, poster_path, genres, overview, release_date, runtime, tagline, backdrop_path, } = movieId

  return (
    !movieId ? <h1>Loading</h1> : <div id={styles.container}
           style={{backgroundImage: `url(${apiConfig.image.w1280ImgURL + backdrop_path})`, backgroundSize: 'cover',}}>
        <div style={{backgroundColor: 'rgba(0,0,0, .65)',}}>
          <div className={styles.content_wrapper}>
            <div className={styles.movie_details}>
              <div className={styles.poster}>
                <img src={apiConfig.image.w500ImgURL + poster_path} alt="" className={styles.poster_img}/>
              </div>
              <div className={styles.detail_column}>
                <div className={styles.movie_title}>
                  <h2>{title} </h2>
                  <div className={styles.facts}>
                    <span className={styles.pg_rating}>PG-16 </span>
                    <span className={styles.release}>{release_date}</span>
                    <span className={styles.generes}>{genres && genres.map(item => item.name).join()} </span>
                    <span className={styles.runtime}>{runtime} мин.</span>
                  </div>
                </div>

                {/*<ul className={styles.actions}>*/}
                {/*  <li className={styles.actions_rating}><span>rating</span></li>*/}
                {/*  <li className={styles.actions_favorite}><span>add to fav</span></li>*/}
                {/*  <li className={styles.actions.trailer}><span>trailer</span></li>*/}
                {/*</ul>*/}
                <div className={styles.movie_review}>
                  <div className={styles.tagline}>
                    <h3 className={styles.tagline_title}>{tagline}</h3>
                    <h3 className={styles.review_title}>Обзор</h3>
                  </div>
                  <div className={styles.review}>
                    <p>
                      {overview}
                    </p>
                  </div>
                </div>

                <ol className={`${styles.people} ${styles.no_image}`}>
                  <li className={styles.profile}>
                    <p><a href="/person/1086497-jo-sung-hee">Jo Sung-hee</a></p>
                    <p className={styles.character}>Director, Screenplay, Story</p>
                  </li>

                </ol>
              </div>
            </div>
          </div>
          {/*<div className={styles.cast}></div>*/}
          {/*<div className={styles.more_info}></div>*/}
        </div>
      </div>
  );
};

export default DetailsPage;