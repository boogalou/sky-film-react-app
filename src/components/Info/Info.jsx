import React from 'react';
import styles from './Info.module.css'

const Info = () => {
  return (
    <>
      <div  className={styles.header_wrapper}>

          <div className={styles.info_title}>
            <span className={styles.title_first}>Иcходное название</span>
            <span className={styles.title_second}>Wrath of Man</span>
          </div>


          <div className="status">
            <span className={styles.title_first}>Статус</span>
            <span className={styles.title_first}>Выпущено</span>
          </div>


          <div className="budget">
            <span className={styles.title_first}>Бюджет</span>
            <span className={styles.title_first}>40,000,000.00</span>
          </div>


          <div className="budget">
            <span className={styles.title_first}>Сборы</span>
            <span className={styles.title_first}>80,437,520.00</span>
          </div>

      </div>
    </>
  );
};

export default Info;