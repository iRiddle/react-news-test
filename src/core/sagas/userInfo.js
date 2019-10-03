import { takeLatest, put, call } from "redux-saga/effects";
import { GET_USER_INFO_TRIGGER } from "core/constants";
import AXIOS from "core/api";

import {
  getUserInfoFulfilled,
  getUserInfoRejected,
  getUserInfoPending
} from "core/actions/userInfo";

export function* getUserInfoAction({ data }) {
  const { id } = data;
  try {
    yield put(getUserInfoPending());
    const response = yield call(() => {
      return AXIOS.get(`/user-info/${id}`);
    });
    yield put(getUserInfoFulfilled(response.data));
  } catch (error) {
    yield put(getUserInfoRejected(error));
  }
}

export default function* watchFetchUserInfo() {
  yield takeLatest(GET_USER_INFO_TRIGGER, getUserInfoAction);
}
