import * as types from './moviesReducer';


export const setMoviesStart = (search) => ({
    type: types.SET_MOVIES_START,
    payload: search,
});

export const setMoviesSuccess = movies => ({
    type: types.SET_MOVIES_SUCCESS,
    payload: movies
});

export const setMoviesFailure = error => ({
    type: types.SET_MOVIES_FAILURE,
    payload: error
});