import { FETCH_CITY_WEATHER, CITY_WEATHER_LOADED } from './actions';

const INITIAL_STATE = {
  loading: true,
  data: null,
};

export default (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case FETCH_CITY_WEATHER:
      return { ...state, loading: true };
    case CITY_WEATHER_LOADED:
      return { ...state, data: action.city, loading: false };
    default:
      return state;
  }
};
