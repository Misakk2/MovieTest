import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./rootReducer";
import rootSaga from '../sagas/rootSaga';


const saga = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(saga)
);

export const persistor = persistStore(store);

/* saga.run(rootSaga) */

export default { store, persistor };
/*
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */