import { SET_SEARCH, INCREMENT_PAGE, DECREMENT_PAGE } from './searchReducer';

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,
})

export const increment = () => ({
    type: INCREMENT_PAGE
});

export const decrement = () => ({
    type: DECREMENT_PAGE
});