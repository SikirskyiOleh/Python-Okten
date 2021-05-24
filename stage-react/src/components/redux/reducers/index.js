import {postReducer} from "./postReducer";
import {commentsReducer} from "./commentsReducer";
import {todosReducer} from "./todosReducer";
import {combineReducers} from "redux";

export default combineReducers({
    posts: postReducer,
    comments: commentsReducer,
    todos: todosReducer
})