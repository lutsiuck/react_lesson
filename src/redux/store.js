import { combineReducers, createStore } from "redux";
import addPostActionCreator from "./addPost-reducer";

let reducers = combineReducers({
    posts: addPostActionCreator ,
});

let store = createStore(reducers);

export default store;