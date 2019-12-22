import { combineReducers } from 'redux';
import colorOptions from './colorOptions';
import hoverColor from './hoverColor';
import squaresPerPage from './squaresPerPage';

const rootReducer = combineReducers({
  colorOptions,
  hoverColor,
  squaresPerPage,
});

export default rootReducer;
