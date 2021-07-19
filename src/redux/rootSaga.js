import { all, call } from 'redux-saga/effects';
import { movieSaga } from './movies/movieSaga'

export default function* rootSaga() {
    yield all([
        call(movieSaga)
    ]);
}