import {
  LOGIN_PENDING,
  LOGIN_FILFULLED,
  LOGIN_REJECTED,
  LOGIN_TRIGGER,
  LOGOUT_CONST
} from "core/constants";

export const loginPending = () => ({
  type: LOGIN_PENDING
});

export const loginFulfilled = data => ({
  type: LOGIN_FILFULLED,
  data
});

export const loginRejected = error => ({
  type: LOGIN_REJECTED,
  error
});

export const logoutAction = () => ({
  type: LOGOUT_CONST
});

export const loginTrigger = (data, callback) => ({
  type: LOGIN_TRIGGER,
  data,
  callback
});
