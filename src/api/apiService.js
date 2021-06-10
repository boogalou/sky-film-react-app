import axios from 'axios'
import {apiConfig} from '../config'

const {baseURL, API_KEY} = apiConfig;

export class ApiService {

  async getResource(url = '', lng = 'ru-RU', region = 'RU', search = '', append) {
    const response = await axios.get(
      `${baseURL}${url}${API_KEY}&language=${lng}&region=${region}&query=${search}&page=1&append_to_response=${[append].join('')}`);
    return await response.data

  }

  getMovies() {
    return this.getResource('movie/popular')
  }

  getTvshows() {
    return this.getResource('tv/popular')
  }

  getActors() {
    return this.getResource('person/popular', 'ru-RU', 'RU',
      1)
  }

  getPopularity(isActive) {
    if (!isActive) {
      return this.getResource('movie/popular', 'ru-RU', 'RU');
    } else if (isActive === 'По ТВ') {
      return this.getResource('tv/on_the_air', 'ru-RU', 'RU');
    } else {
      return this.getResource('movie/now_playing', 'ru-RU', 'RU');
    }
  }

  getTrends(isTime) {
    !isTime ? isTime = 'day' : isTime = 'week'
    return this.getResource(`trending/movie/${isTime}`, 'ru-RU', 'RU');
  }

  getTrailers() {
    return this.getResource('movie/top_rated')
  }

  search(searchValue) {
    return this.getResource('search/multi', 'ru-RU', 'RU', `${searchValue}`);
  }

  getMovieTvForId({movie_id}, isActive) {
    console.log('isActive:', movie_id, isActive);
    if (isActive === 'По ТВ') {
      return this.getResource(`tv/${movie_id}`, 'ru-RU', 'RU', null, ['credits', 'videos', 'images']);
    }
    return this.getResource(`movie/${movie_id}`, 'ru-RU', 'RU', null, ['credits', 'videos', 'images']);
  }

  getTrailersForId({movie_id}) {
    return this.getResource(`movie/${movie_id}/videos`, 'ru-RU', 'RU');
  }

}

