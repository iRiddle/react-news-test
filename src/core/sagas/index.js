import { fork, all } from "redux-saga/effects";
import news from "core/sagas/news";
// import watchFetchMovies from "./getMoviesSaga";
// import watchFetchMovieInfo from "./getMovieInfoSaga";

export default function* rootSaga() {
  yield all([
    fork(news)
    // fork(watchFetchGenres),
    // fork(watchFetchMovies),
    // fork(watchFetchMovieInfo)
  ]);
}
