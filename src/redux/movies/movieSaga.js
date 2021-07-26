import { takeLatest, put, all, call } from "redux-saga/effects";
import * as types from './moviesReducer';
import { BaseSearchUrl, ApiKey } from '../../api/Api';
import axios from "axios";


import { setMoviesSuccess, setMoviesFailure } from './moviesActions';

export function* searchForMovies(getSearch) {
    console.log(getSearch)
    try {
        const response = yield axios.get(`${BaseSearchUrl}?s=${getSearch.payload.search}&page=${getSearch.payload.page}&apikey=${ApiKey}`);
        const { data } = response;
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