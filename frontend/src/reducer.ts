import { combineReducers } from 'redux'
import home from 'screens/Home/reducer';
import city from 'screens/City/reducer';
import search from 'screens/Search/reducer';

export default combineReducers({
  home,
  city,
  search,
});
