import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import searchReducer from './search/searchReducer';
import moviesReducer from './movies/moviesReducer';
import detailReducer from "./detail/detailReducer";
import { favoriteReducer } from "./favorite/favoriteReducer";

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