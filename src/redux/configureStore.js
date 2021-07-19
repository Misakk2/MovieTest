import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export default { store, persistor };
