import {
  GET_USER_INFO_PENDING,
  GET_USER_INFO_FILFULLED,
  GET_USER_INFO_REJECTED,
  GET_USER_INFO_TRIGGER
} from "core/constants";

export const getUserInfoPending = () => ({
  type: GET_USER_INFO_PENDING
});

export const getUserInfoFulfilled = data => ({
  type: GET_USER_INFO_FILFULLED,
  data
});

export const getUserInfoRejected = error => ({
  type: GET_USER_INFO_REJECTED,
  error
});

export const getUserInfoTrigger = data => ({
  type: GET_USER_INFO_TRIGGER,
  data
});
