import axios from 'axios';
import config from '../config';

const REQUEST_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default function(cityName) {
  const encodedCityName = encodeURIComponent(cityName);
  const requestUrl = `${REQUEST_URL}?q=${encodedCityName}&appid=${config.weatherApi.token}`;

  return axios.get(requestUrl, reqParams).then(res => {
    return res;
  })
}