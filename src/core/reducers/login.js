import { combineReducers } from "redux";

import {
  LOGIN_PENDING,
  LOGIN_FILFULLED,
  LOGIN_REJECTED,
  LOGOUT_CONST
} from "core/constants";

const isFetching = (state = false, action) => {
  switch (action.type) {
    case LOGIN_REJECTED:
    case LOGIN_FILFULLED:
      return false;
    case LOGIN_PENDING:
      return true;
    default:
      return state;
  }
};

const error = (state = "", action) => {
  switch (action.type) {
    case LOGIN_REJECTED:
      return action.error;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_FILFULLED:
      return action.data;
    case LOGOUT_CONST:
      return {};
    default:
      return state;
  }
};

const reducer = combineReducers({
  isFetching,
  error,
  user
});

export default reducer;
