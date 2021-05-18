import axios from 'axios'
import { API_KEY, baseURL } from '../config'



export class ApiService {

  async getResource(url)  {
    const response = await axios.get(baseURL + `${url}` + API_KEY);
    console.log(response.data.results)
    return response.data.results
  }

  getTrends() {
    return this.getResource('trending/movie/week')
  }

  getMovie() {
    return this.getResource('trending/movie/week')
  }
}
