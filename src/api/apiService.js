import axios from 'axios'
import { apiConfig } from '../config'

const {baseURL, API_KEY} = apiConfig

export class ApiService {



  async getResource(url, lng)  {
    const response = await axios.get(`${baseURL}${url}${API_KEY}${lng}`);
    return response.data.results;
  }

  getTrends() {
    return this.getResource('trending/movie/week');
  }

  getMovies() {
    return this.getResource('discover/movie');
  }

  getShows() {
    return this.getResource('discover/tv');
  }

  getPopularSows() {
    return this.getResource('discover/tv', '&language=ru-Ru&sort_by=popularity.desc&page=1&timezone=Russia%2FMoscow&include_null_first_air_dates=false&with_watch_monetization_types=flatrate')
  }

}

