import { CHANGE_AUTH_USER } from "./types";
import { TAuthUser } from "../constants/typescript-types";


interface IAction {
   type: string,
   payload: TAuthUser
}

export const authUserReducer = (state: TAuthUser = null, action: IAction) => {
   switch(action.type) {
      case CHANGE_AUTH_USER:
         return action.payload
      default:
         return state
   }
}