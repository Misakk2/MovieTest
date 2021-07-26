export const SET_DETAIL_START = "SET_DETAIL_START";
export const SET_DETAIL_SUCCESS = "SET_DETAIL_SUCCESS";
export const SET_DETAIL_FAILURE = "SET_DETAIL_FAILURE";

const initState = {
    detail: [],
    detailLoading: false,
    error: null
}

const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_DETAIL_START:
            return {
                ...state,
                detailLoading: true
            }
        case SET_DETAIL_SUCCESS:
            return {
                ...state,
                detail: action.payload,
                detailLoading: false,
                error: null
            };
        case SET_DETAIL_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default detailReducer;