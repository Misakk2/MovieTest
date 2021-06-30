import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import searchReducer from './reducers/searchReducer';
import moviesReducer from './reducers/moviesReducer';/* 
import { watcherSaga } from "./sagas/rootSaga"; */

const reducer = combineReducers({
    search: searchReducer,
    movie: moviesReducer
});

const sagaMiddleware = createSagaMiddleware();
/* 
const middleware = [sagaMiddleware]; */
const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* sagaMiddleware.run(watcherSaga); */

export default store;