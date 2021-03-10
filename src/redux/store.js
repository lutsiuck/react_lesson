import { combineReducers, createStore } from "redux";
import addPostActionCreator from "./addPost-reducer";
import userReducer from "./users-reducer";



let reducers = combineReducers({
    postsPage: addPostActionCreator ,
    usersPage: userReducer
});

let store = createStore(reducers);

export default store; 