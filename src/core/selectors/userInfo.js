import { createSelector } from "reselect";
const get = require("lodash/get");

const userInfo = store => get(store, "userInfo", {});

export const isUserInfoPendingSelector = store =>
  get(store, "userInfo.isFetching", "");

export const getUserInfoSelector = createSelector(
  userInfo,
  ui => get(ui, "userInfo.data", {})
);

export const getUserInfoLanguagesSelector = createSelector(
  userInfo,
  ui => get(ui, "userInfo.data.languages", [])
);

export const getUserSocialLanguagesSelector = createSelector(
  userInfo,
  ui => get(ui, "userInfo.data.social", [])
);
