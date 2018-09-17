import { SEARCH_BY_CITY, SEARCH_BY_CITY_LOADED, SEARCH_ERROR } from './actions';

export interface State {
  loading: boolean;
  data: any;
  error: boolean;
}

const INITIAL_STATE: State = {
  loading: true,
  error: false,
  data: null,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SEARCH_BY_CITY:
      return { ...state, loading: true, error: false };
    case SEARCH_BY_CITY_LOADED:
      return { ...state, loading: false, error: false, data: action.data };
    case SEARCH_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
