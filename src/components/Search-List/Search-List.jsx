import React from 'react';
import styles from './Search-List.module.css'

const SearchList = ({title,}) => {

  console.log('title:', title)
  return (
    !title ? null :
    <>
      <li className={styles.search_item}>
        <a href="#">{title}</a>
      </li>

    </>
  );
};

export default SearchList;

