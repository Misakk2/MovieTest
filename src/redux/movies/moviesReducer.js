export const SET_MOVIES_START = "SET_MOVIES_START";
export const SET_MOVIES_SUCCESS = "SET_MOVIES_SUCCESS";
export const SET_MOVIES_FAILURE = "SET_MOVIES_FAILURE";

const initState = {
    movies: [],
    moviesLoading: false,
    error: null
}

const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MOVIES_START:
            return {
                ...state,
                moviesLoading: true
            }
        case SET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                error: null,
                moviesLoading: false
            }
        case SET_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default moviesReducer;