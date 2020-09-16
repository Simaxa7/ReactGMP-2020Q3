import { combineReducers } from 'redux';
import reducerGenre from './reducerGenre';
import reducerViewData from './reducerViewData';

const reducer = combineReducers({
  genre: reducerGenre,
  viewData: reducerViewData,
});

export default reducer;
