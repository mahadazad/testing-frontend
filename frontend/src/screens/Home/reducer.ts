import config from 'config';
import { UPDATE_SEARCH_FIELD } from './actions';

export interface City {
  name: string;
  woeid: number;
}

export interface State {
  searchKeyword: string,
  cities: Array<City>,
}

const INITIAL_STATE: State = {
  searchKeyword: '',
  cities: config.defaultCities,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case UPDATE_SEARCH_FIELD:
      return { ...state, searchKeyword: action.searchKeyword };
    default:
      return state;
  }
};
