import { fork, all } from "redux-saga/effects";
import news from "core/sagas/news";
import login from "core/sagas/login";
import userInfo from "core/sagas/userInfo";

export default function* rootSaga() {
  yield all([fork(news), fork(login), fork(userInfo)]);
}
