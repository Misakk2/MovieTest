const SET_FAVORITE = "SET_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const setFavorite = (favorite) => ({
    type: SET_FAVORITE,
    favorite
})

export const removeFavorite = (favorite) => ({
    type: REMOVE_FAVORITE,
    favorite
})

const initState = {
    favorite: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            const { favorite } = action
            return { ...state, favorite: [...state.favorite, favorite] };
        default:
            return state;
    }
}