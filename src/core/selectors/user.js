const get = require("lodash/get");

export const getUserIdSelector = store => get(store, "user.user.data", {});
