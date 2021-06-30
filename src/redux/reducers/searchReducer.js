const SET_SEARCH = 'SET_SEARCH';
const INCREMENT_PAGE = "INCREMENT_PAGE";
const DECREMENT_PAGE = "DECREMENT_PAGE";

export const search = (search) => ({
    type: SET_SEARCH,
    payload: search
})

export const increment = () => ({
    type: INCREMENT_PAGE
});

export const decrement = () => ({
    type: DECREMENT_PAGE
});

const initState = {
    search: "",
    page: 1
}


export default (state = initState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, payload: search };
        case INCREMENT_PAGE:
            return { ...state, page: state.page + 1 };
        case DECREMENT_PAGE:
            return {
                ...state, page: state.page - 1 
            };
        default:
            return state
    }
};