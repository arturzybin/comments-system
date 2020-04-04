import { CHANGE_AUTH_USER, SET_AUTH_USER_USERNAME, ADD_COMMENTS } from "./types";
import { TAuthUser, IComment } from "../constants/typescript-types";

// authUser -----------------------------------------------------------------------
export const changeAuthUser = (user: TAuthUser) => ({
   type: CHANGE_AUTH_USER,
   payload: user
})

export const setAuthUserUsername = (username: string) => ({
   type: SET_AUTH_USER_USERNAME,
   payload: username
})

// comments -----------------------------------------------------------------------
export const addComments = (comments: IComment[]) => ({
   type: ADD_COMMENTS,
   payload: comments
})