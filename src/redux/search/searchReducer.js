export const SET_SEARCH = 'SET_SEARCH';
export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const DECREMENT_PAGE = "DECREMENT_PAGE";

export const initStateSearch = {
    search: '',
    page: 1,
}

const searchReducer = (state = initStateSearch, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
                page: 1
            };
        case INCREMENT_PAGE:
            return {
                ...state,
                page: state.page + 1
            };
        case DECREMENT_PAGE:
            return {
                ...state,
                page: state.page - 1
            };
        default:
            return state
    }
};

export default searchReducer;