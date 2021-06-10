import React from 'react';
import {Link} from "react-router-dom";
import styles from './Cast.module.css'
import {apiConfig} from "../../config";

const Cast = ({name, character, profile_path}) => {
  return (
    <>

        <li>
          <div className={styles.cast_box}>
            <div className={styles.cast_b_img}>
              <Link><img src={apiConfig.image.w500ImgURL + profile_path} alt='poster'/></Link>
            </div>
            <div className={styles.cast_b_description}>
              <span className={styles.name}><Link>{name}</Link></span>
              <span className={styles.character}>{character}</span>
            </div>
          </div>
        </li>



    </>
  );
};

export default Cast;