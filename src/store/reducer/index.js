import { combineReducers } from 'redux';
import items from './items';

const allReducers = combineReducers({ items });

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return allReducers(state, action);
};

export default rootReducer;
