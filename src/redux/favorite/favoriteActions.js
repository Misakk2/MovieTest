import * as types from './favoriteReducer';

export const setFavoriteMovie = (favorite) => ({
    type: types.SET_FAVORITE,
    payload: favorite
})

export const removeFavorite = (favorite) => ({
    type: types.REMOVE_FAVORITE,
    payload: favorite
})
