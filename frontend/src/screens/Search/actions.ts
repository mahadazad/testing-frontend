import { searchByCity } from 'modules/weather';
import { City } from 'types/weather';

export const SEARCH_BY_CITY = 'search/SEARCH_BY_CITY';
export const SEARCH_BY_CITY_LOADED = 'search/SEARCH_BY_CITY_LOADED';
export const SEARCH_ERROR = 'search/SEARCH_ERROR';

export const searchByCityKeyword = (keyword: string) => async (dispatch: Function) => {
  dispatch({ type: SEARCH_BY_CITY });

  try {
    const data: City = await searchByCity(keyword);
    dispatch({ type: SEARCH_BY_CITY_LOADED, data });
  } catch (e) {
    dispatch({ type: SEARCH_ERROR });
  }
};
