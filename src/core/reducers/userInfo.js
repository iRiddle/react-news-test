import { combineReducers } from "redux";

import {
  GET_USER_INFO_PENDING,
  GET_USER_INFO_FILFULLED,
  GET_USER_INFO_REJECTED
} from "core/constants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GET_USER_INFO_REJECTED:
    case GET_USER_INFO_FILFULLED:
      return false;
    case GET_USER_INFO_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case GET_USER_INFO_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO_FILFULLED:
      return action.data;
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  userInfo
});

export default reducer;
