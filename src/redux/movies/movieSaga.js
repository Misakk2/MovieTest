import { takeLatest, put, all, call } from "redux-saga/effects";
import * as types from './moviesReducer';
import { BaseSearchUrl, ApiKey } from '../../api/Api';
import axios from "axios"


import { setMoviesSuccess, setMoviesFailure } from './moviesActions';

export function* searchForMovies() {
    try {
        const response = yield axios.get(`${BaseSearchUrl}?s=Batman&page=1&apikey=${ApiKey}`);
        const { data } = response;
        console.log(data.Search)
        yield put(setMoviesSuccess(data.Search))
    } catch (error) {
        yield put(setMoviesFailure(error))
    }
}

export function* onSetMoviesStart() {
    yield takeLatest(types.SET_MOVIES_START, searchForMovies)
}

export function* movieSaga() {
    yield all([
        call(onSetMoviesStart)
    ])
}