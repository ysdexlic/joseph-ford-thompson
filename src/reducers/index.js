import { combineReducers } from 'redux'

import header from './header'
import modal from './modal'

export const rootReducer = combineReducers({
  header,
  modal
});

export default rootReducer;
