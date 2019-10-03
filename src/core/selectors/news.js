import { createSelector } from "reselect";

const get = require("lodash/get");
const news = store => get(store, "news", []);

export const isLoadingNewsSelector = store => get(store, "news.isFetching", false);
export const getNewsSelector = createSelector(
  news,
  n => get(n, "news.data", [])
);
