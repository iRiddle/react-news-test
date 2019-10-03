import { takeLatest, put, call } from "redux-saga/effects";
import { LOGIN_TRIGGER } from "core/constants";
import AXIOS from "core/api";

import {
  loginFulfilled,
  loginRejected,
  loginPending
} from "core/actions/login";

export function* loginAction({ data, callback }) {
  try {
    yield put(loginPending());
    const response = yield call(() => {
      return AXIOS.post("/validate", data);
    });
    yield put(loginFulfilled(response.data));
    yield put(callback(response.data));
  } catch (error) {
    yield put(loginRejected(error));
  }
}

export default function* watchFetchLogin() {
  yield takeLatest(LOGIN_TRIGGER, loginAction);
}
