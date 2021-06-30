import { combineReducers, createStore } from "redux";
import searchReducer from './reducers/searchReducer';

const reducer = combineReducers({
    search: searchReducer
});

const store = createStore(
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;