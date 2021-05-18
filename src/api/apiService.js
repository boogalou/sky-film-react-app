import axios from 'axios'
import { apiConfig } from '../config'

const {baseURL, API_KEY} = apiConfig

export class ApiService {



  async getResource(url)  {
    const response = await axios.get(baseURL + `${url}` + API_KEY);
    return response.data.results;
  }

  getTrends() {
    return this.getResource('trending/movie/week');
  }

  getMovies() {
    return this.getResource('discover/movie');
  }
}
