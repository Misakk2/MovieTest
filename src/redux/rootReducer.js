import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import searchReducer from './reducers/searchReducer';
import moviesReducer from './reducers/moviesReducer';
import detailReducer from "./reducers/detailReducer";
import favoriteReducer from "./reducers/favoriteReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite']
}

const rootReducer = combineReducers({
    search: searchReducer,
    movie: moviesReducer,
    detail: detailReducer,
    favorite: favoriteReducer
});

export default persistReducer(persistConfig, rootReducer)