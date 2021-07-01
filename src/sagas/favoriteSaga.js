/* import { takeEvery, call, put, all } from 'redux-saga/effects'
import * as types from '../redux/reducers/favoriteReducer';

function* setFavorite({ movie }) {
    console.log('running setFavorite')
    try {
        yield put(types.FAVORITE_SET(movie))
        console.log(movie)
    } catch (e) {
        console.log(e)
    }
}

function* watchAddFavorite() {
    console.log('Setfavofite run OK run watchAddFavorite')
    yield takeEvery(types.SET_FAVORITE, setFavorite)
}

export function* favoriteSaga() {
    yield all([
        watchAddFavorite()
    ])
} */