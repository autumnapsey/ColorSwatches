import { combineReducers } from 'redux';
import colorOptions from './colorOptions';
import hoverColor from './hoverColor';
import squaresPerPage from './squaresPerPage';
import currentPage from './currentPage';

const rootReducer = combineReducers({
  colorOptions,
  hoverColor,
  squaresPerPage,
  currentPage,
});

export default rootReducer;
