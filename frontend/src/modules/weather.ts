import axios from 'axios';
import config from 'config';

export const fetchByWoeid = (woeid: number) => {
  return axios.get(config.weatherApiUrl, {
    params: {
      command: 'location',
      woeid,
    }
  }).then(response => {
    const data = response.data;

    return {
      woeid: data.woeid,
      name: data.title,
      weathers: data.consolidated_weather.map((weather: any) => ({
        id: weather.id,
        date: weather.applicable_date,
        maxTemp: weather.max_temp,
        minTemp: weather.min_temp,
        temp: weather.the_temp,
        icon: `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`,
      }))
    }
  });
};

export const searchByCity = async (keyword: string) => {
  const response = await axios.get(config.weatherApiUrl, {
    params: {
      command: 'search',
      keyword,
    }
  });

  if (!response.data.length) {
    throw Error('not found');
  }

  const city = response.data[0];
  return fetchByWoeid(city.woeid);
};
