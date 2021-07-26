import { addMovieToFavorite } from './favoriteUtils'

export const SET_FAVORITE = "SET_FAVORITE";

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

const initState = {
    favorite: [],
    error: null
}

export const favoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            return {
                ...state,
                favorite: addMovieToFavorite(state.favorite, action.payload),
                error: null
            };
        case REMOVE_FAVORITE:
            return {
                ...state, favorite: state.favorite.filter(favorit => {
                    return favorit.imdbID !== action.payload
                })
            };
        default:
            return state;
    }
}

