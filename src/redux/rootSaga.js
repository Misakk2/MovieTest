import { all, call } from 'redux-saga/effects';
import { movieSaga } from './movies/movieSaga';
import { detailSaga } from './detail/detailSaga';

export default function* rootSaga() {
    yield all([
        call(movieSaga),
        call(detailSaga)
    ]);
}