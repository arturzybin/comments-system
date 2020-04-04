import { IComment } from "../constants/typescript-types";
import { ADD_COMMENTS } from "./types";


interface IAction {
   type: string,
   payload: IComment[]
}

export function commentsReducer(state: IComment[] = [], action: IAction) {
   switch (action.type) {
      case ADD_COMMENTS:
         return [...state, ...action.payload]
      default:
         return state
   }
}