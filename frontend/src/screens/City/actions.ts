import { fetchByWoeid } from 'modules/weather';

export const FETCH_CITY_WEATHER = 'city/FETCH_CITY_WEATHER';
export const CITY_WEATHER_LOADED = 'city/CITY_WEATHER_LOADED';

export const featchCityWeather = (woeid: number) => async (dispatch: any) => {
  dispatch({ type: FETCH_CITY_WEATHER });
  const city = await fetchByWoeid(woeid);
  dispatch({ type: CITY_WEATHER_LOADED, city });
};
