import { combineReducers } from "redux";
import {HYDRATE} from 'next-redux-wrapper';

const init = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const reducer = combineReducers({
  init
});
export default reducer;