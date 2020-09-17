import { combineReducers } from 'redux';
import reducerGenre from './reducerGenre';
import reducerViewData from './reducerViewData';
import reducerQuer from './reducerQuerry';

const reducer = combineReducers({
  genre: reducerGenre,
  viewData: reducerViewData,
  qOptions: reducerQuer,
});

export default reducer;
