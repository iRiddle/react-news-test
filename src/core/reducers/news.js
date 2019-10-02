import { combineReducers } from "redux";

import {
  GET_NEWS_PENDING,
  GET_NEWS_FILFULLED,
  GET_NEWS_REJECTED
} from "core/constants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_NEWS_REJECTED:
    case GET_NEWS_FILFULLED:
      return false;
    case GET_NEWS_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_NEWS_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case GET_NEWS_FILFULLED:
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  news
});

export default reducer;
