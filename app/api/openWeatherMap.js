import axios from 'axios';

const WEATHER_API_KEY = 'c2389f8342748200b6a1cb23ed83fe1f';
const OPEN_WEATHER_BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

module.exports = {
  getTemperature(city) {
    const encodedLocation = encodeURIComponent(city);
    const requestUrl = `${OPEN_WEATHER_BASE_URL}?q=${encodedLocation}&APPID=${WEATHER_API_KEY}&units=metric`;

    return axios.get(requestUrl)
      .then((res) => {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        }

        return res.data.main.temp;
      }, (res) => {
        throw new Error(res.data.message);
      });
  }
};
