import { combineReducers } from "redux";
import { authUserReducer } from "./authUserReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
   authUser: authUserReducer,
   commentsStore: commentsReducer
})