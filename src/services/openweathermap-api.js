import axios from 'axios';
import { weatherApi } from '../config';

const REQUEST_URL = 'https://api.openweathermap.org/data/2.5/weather';

module.exports = {
  getWeather: (cityName) => {
    const encodedCityName = encodeURIComponent(cityName);
    const requestUrl = `${REQUEST_URL}?q=${encodedCityName}&appid=${weatherApi.token}`;
  
    return axios.get(requestUrl, reqParams).then(res => {
      return res;
    })
  }
}