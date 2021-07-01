export const SET_FAVORITE = "SET_FAVORITE";
export const FAVORITE_SET = "FAVORITE_SET";

export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FAVORITE_DELETED = "FAVORITE_DELETED";

export const LOAD_FAVORITE = "LOAD_FAVORITE";
export const FAVORITE_LOADED = "FAVORITE_LOADED";


//  -----Actions-----

export const loadFavorite = () => {
    return {
        type: LOAD_FAVORITE
    }
}

export const favoriteLoaded = (favorite) => {
    return {
        type: FAVORITE_LOADED,
        favorite
    }
}


export const setFavorite = (favorite) => ({
    type: SET_FAVORITE,
    favorite
})

export const favoriteSet = (favorite) => {
    return {
        type: FAVORITE_SET,
        favorite
    }
}

export const removeFavorite = (favorite) => ({
    type: REMOVE_FAVORITE,
    favorite
})

export const favoriteDeleted = (favorite) => {
    return {
        type: FAVORITE_DELETED,
        favorite
    }
}


//  -----Initial state-----

const initState = {
    favorite: []
}


//  -----Reducer-----

export default (state = initState, action) => {
    switch (action.type) {
        case FAVORITE_LOADED:
            return action.favorite

        case FAVORITE_SET:
            const { favorite } = action
            return {
                ...state,
                favorite: [...state.favorite, favorite]
            };

        case FAVORITE_DELETED:
            return {
                ...state,
                favorite: state.favorite.filter(favorit => {
                    return favorit.imdbID !== action.favorite
                })
            };
        default:
            return state;
    }
}