const SET_DETAIL = "SET_DETAIL";

export const setDetail = (detail) => ({
    type: SET_DETAIL,
    detail
})

const initState = {
    detail: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_DETAIL:
            const { detail } = action
            return { detail };
        default:
            return state;
    }
}