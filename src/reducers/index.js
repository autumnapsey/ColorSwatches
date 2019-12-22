import { combineReducers } from 'redux';
import colorOptions from './colorOptions';
import cartColors from './cartColors';
import hoverColor from './hoverColor';
import squaresTotal from './squaresTotal';

const rootReducer = combineReducers({
  colorOptions,
  cartColors,
  hoverColor,
  squaresTotal,
});

export default rootReducer;
