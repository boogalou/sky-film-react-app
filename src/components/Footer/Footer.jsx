import React from 'react'
import './Footer.css'
import tmdb_full_logo from '../../assets/img/tmdb_full_logo.svg'
import github_original_logo from '../../assets/img/github_original_logo.svg'

const Footer = () => {
  return (
    <>
      <footer>
        <p><a href="https://github.com/boogalou">
          <img src={github_original_logo} alt=""/>
        </a></p>
        <p><a href="https://www.themoviedb.org/">
          <img src={tmdb_full_logo} alt=""/>
        </a></p>
      </footer>
    </>
  )
}

export default Footer;