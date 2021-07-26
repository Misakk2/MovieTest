import * as types from './detailReducer';

export const setDetailStart = (imdbID) => ({
    type: types.SET_DETAIL_START,
    paylaod: imdbID
});

export const setDetailSuccess = (detail) => ({
    type: types.SET_DETAIL_SUCCESS,
    payload: detail
});

export const setDetailFailure = error => ({
    type: types.SET_DETAIL_FAILURE,
    payload: error
});