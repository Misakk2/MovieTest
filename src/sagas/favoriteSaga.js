import { takeEvery, call, put, all } from 'redux-saga/effects'
import * as types from '../redux/reducers/favoriteReducer';

function* loadFavorite() {
    const favorites = yield call(types.setFavorite)
    put(types.favoriteLoaded(favorites))
}

function* watchLoadFavorite() {
    yield takeEvery(types.LOAD_FAVORITE, loadFavorite)
}

export function* favoriteSaga() {
    yield all([
        watchLoadFavorite()
    ])
}