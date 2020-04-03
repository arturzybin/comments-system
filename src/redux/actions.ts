import { CHANGE_AUTH_USER, SET_AUTH_USER_USERNAME } from "./types";
import { TAuthUser } from "../constants/typescript-types";

// authUser -----------------------------------------------------------------------
export const changeAuthUser = (user: TAuthUser) => ({
   type: CHANGE_AUTH_USER,
   payload: user
})

export const setAuthUserUsername = (username: string) => ({
   type: SET_AUTH_USER_USERNAME,
   payload: username
})