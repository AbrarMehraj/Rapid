/** @format */

import { combineReducers } from 'redux';
import { postListReducer, userDetailsReducer } from './rootReducer';

export default combineReducers({
  postList: postListReducer,
  userInfo: userDetailsReducer,
});
