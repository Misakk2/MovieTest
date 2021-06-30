const SET_MOVIES = "SET_MOVIES";

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
})

const initState = {
    movies: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            const { movies } = action
            return { movies };
        default:
            return state;
    }
}