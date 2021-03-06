import { GET_POST_LIST, QUERY, SET_USER, QUERY_RESET } from '../types/Types';

export const postListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_LIST:
      return { posts: action.payload };

    default:
      return state;
  }
};

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;

    default:
      return state;
  }
};

export const queryReducer = (state = '', action) => {
  switch (action.type) {
    case QUERY:
      return action.payload;

    case QUERY_RESET:
      return '';

    default:
      return state;
  }
};
