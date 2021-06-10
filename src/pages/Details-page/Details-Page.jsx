import React from 'react';
import {useParams} from 'react-router-dom';
import {ApiService} from "../../api/apiService";
import styles from './Details-Page.module.css'
import {apiConfig} from "../../config";
import Cast from "../../components/Cast/Cast";

const DetailsPage = ({ switchPosition }) => {
  console.log('switchPosition:', switchPosition)
  const getData = new ApiService();
  const ID = {movie_id: +useParams().id};

  const [isFetching, setIsFetching] = React.useState(true)
  const [movieId, setMovieId] = React.useState([]);

  console.log(movieId);

  React.useEffect(() => {

    getData.getMovieTvForId(ID, switchPosition)
      .then(response => setMovieId(response));
    setIsFetching(false);
  }, []);



  const {title, poster_path, genres, overview, release_date, runtime, tagline, backdrop_path, credits} = movieId
  const crew = credits && credits.crew.filter(person => person.job === 'Director'  || person.job === 'Story')

  return (
    isFetching
      ? <h1>Loading...</h1>
      : <>
        <div id={styles.container}
             style={{
               backgroundImage: `url(${apiConfig.image.w1280ImgURL + backdrop_path})`,
               backgroundSize: 'cover',
             }}>
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
                        { overview }
                      </p>
                    </div>
                  </div>

                    <ol className={`${styles.people} ${styles.no_image}`}>
                      {crew && crew.map(item => <Produceres key={item.id} {...item} /> )}
                    </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cast_box_header}>
          <span className={styles.cast_box_title}>
            <h2>Актерский состав</h2>
          </span>
          <ul className={styles.cast_box_wrapper}>
            {credits && credits.cast.map(item => <Cast key={item.id} {...item} />).slice(0, 12)}
          </ul>
          <div className={styles.more_info}></div>
        </div>
      </>
  );
};

export default DetailsPage;

export const Produceres = ({ name, job }) => {
  return (
    <li className={styles.profile}>
      <p><a href="/person/1086497-jo-sung-hee">{ name }</a></p>
      <p className={styles.character}>{ job }</p>
    </li>
  )
}