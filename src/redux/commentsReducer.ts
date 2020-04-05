import { IComment, IStore } from "../constants/typescript-types";
import { ADD_COMMENTS, SET_COMMENTS_OVER, CREATE_COMMENT } from "./types";


interface IAction {
   type: string,
   payload: any
}

type TState = IStore['commentsStore']

const INITIAL_STATE: TState = {
   comments: [],
   isCommentsOver: false
}

export function commentsReducer(state: TState = INITIAL_STATE, action: IAction) {
   let comments: IComment[]

   switch (action.type) {
      case ADD_COMMENTS:
         comments = [...state.comments, ...action.payload]
         return { ...state, comments }

      case SET_COMMENTS_OVER:
         return { ...state, isCommentsOver: true }

      case CREATE_COMMENT:
         comments = [action.payload, ...state.comments]
         return { ...state, comments }
         
      default:
         return state
   }
}