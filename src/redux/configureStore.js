import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import searchReducer from './reducers/searchReducer';
import moviesReducer from './reducers/moviesReducer';
import detailReducer from "./reducers/detailReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const reducer = combineReducers({
    search: searchReducer,
    movie: moviesReducer,
    detail: detailReducer,
    favorite: favoriteReducer
});

const store = createStore(
    reducer,
    {},

);

export default store;
/*
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */