import { CHANGE_AUTH_USER } from "./types";
import { TAuthUser } from "../constants/typescript-types";

// authUser -----------------------------------------------------------------------
export const changeAuthUser = (user: TAuthUser) => ({
   type: CHANGE_AUTH_USER,
   payload: user
})