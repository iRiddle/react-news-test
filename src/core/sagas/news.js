import { takeLatest, put, call } from "redux-saga/effects";
import { GET_NEWS_TRIGGER } from "core/constants";
import AXIOS from "core/api";

import {
  getNewsFulfilled,
  getNewsRejected,
  getNewsPending
} from "core/actions/news";

export function* getNewsAction() {
  try {
    yield put(getNewsPending());
    const response = yield call(() => {
      return AXIOS.get("/news");
    });
    yield put(getNewsFulfilled(response.data));
  } catch (error) {
    yield put(getNewsRejected(error));
  }
}

export default function* watchFetchMovies() {
  yield takeLatest(GET_NEWS_TRIGGER, getNewsAction);
}
