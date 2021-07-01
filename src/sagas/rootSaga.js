import { all } from 'redux-saga/effects'

import { favoriteSaga } from './favoriteSaga'

function* rootSaga() {
    yield all([
        favoriteSaga(),
    ])
}

export default rootSaga;