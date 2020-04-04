import { IComment, IGlobalState } from "../constants/typescript-types";
import { ADD_COMMENTS, SET_COMMENTS_OVER } from "./types";


interface IAction {
   type: string,
   payload: IComment[]
}

type TState = IGlobalState['commentsState']

const INITIAL_STATE: TState = {
   comments: [],
   isCommentsOver: false
}

export function commentsReducer(state: TState = INITIAL_STATE, action: IAction) {
   switch (action.type) {
      case ADD_COMMENTS:
         const comments = [...state.comments, ...action.payload]
         return { ...state, comments }
      case SET_COMMENTS_OVER:
         return { ...state, isCommentsOver: true }
      default:
         return state
   }
}