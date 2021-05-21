import axios from 'axios'
import { apiConfig } from '../config'

const { baseURL, API_KEY } = apiConfig

export class ApiService {

  async getResource (url = '', lng = '', region = '', page = '') {
    const response = await axios.get(
      `${baseURL}${url}${API_KEY}${lng}${region}${page}`)
    return response.data.results
  }

  getMovies () {
    return this.getResource('movie/popular')
  }

  getTvshows () {
    return this.getResource('tv/popular')
  }

  getActors () {
    return this.getResource('person/popular', '&language=ru-RU', '&region=RU',
      1)
  }

  getPopularity (isActive) {
    if (!isActive) {
      return this.getResource('movie/popular', '&language=ru-RU', '&region=RU')
    } else if (isActive === 'По ТВ') {
      return this.getResource('tv/on_the_air', '&language=ru-RU', '&region=RU')
    } else {
      return this.getResource('movie/now_playing', '&language=ru-RU', 'region=RU')
    }
  }
}

