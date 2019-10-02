import {
  GET_NEWS_PENDING,
  GET_NEWS_FILFULLED,
  GET_NEWS_REJECTED,
  GET_NEWS_TRIGGER
} from "core/constants";

export const getNewsPending = () => ({
  type: GET_NEWS_PENDING
});

export const getNewsFulfilled = data => ({
  type: GET_NEWS_FILFULLED,
  data
});

export const getNewsRejected = error => ({
  type: GET_NEWS_REJECTED,
  error
});

export const getNewsTrigger = () => ({
  type: GET_NEWS_TRIGGER
});
