import { takeLatest, put, all, call } from "redux-saga/effects";
import * as types from "./detailReducer";
import { BaseSearchUrl, ApiKey } from '../../api/Api';
import axios from "axios";

import { setDetailSuccess, setDetailFailure } from "./detailActions";

export function* searchForDetails(getDetail) {
    console.log(getDetail.paylaod)
    try {
        const resp = yield axios.get(`${BaseSearchUrl}?i=${getDetail.paylaod}&apikey=${ApiKey}`);
        const { data } = resp;
        yield put(setDetailSuccess(data))
    } catch (error) {
        yield put(setDetailFailure(error))
    }
}

export function* onSetDetailStart() {
    yield takeLatest(types.SET_DETAIL_START, searchForDetails)
}

export function* detailSaga() {
    yield all([
        call(onSetDetailStart)
    ])
}