export const SET_DETAIL = "SET_DETAIL";

const initState = {
    detail: []
}

const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DETAIL:
            const { detail } = action
            return { detail };
        default:
            return state;
    }
}

export default detailReducer;