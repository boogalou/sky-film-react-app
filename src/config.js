// const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const API_KEY = '?api_key=d5f4b7a1cf6705689b318f72dacb543f'
const baseURL = 'https://api.themoviedb.org/3/'
const w500ImgURL = 'https://image.tmdb.org/t/p/w500'
const w780ImgURL = 'https://image.tmdb.org/t/p/w780'
const w1280ImgURL = 'https://image.tmdb.org/t/p/w1280'
const originalImgURL = 'https://image.tmdb.org/t/p/original'

export const apiConfig = {
  API_KEY,
  baseURL,
  image: {
    w500ImgURL,
    w780ImgURL,
    w1280ImgURL,
    originalImgURL,
  }
}