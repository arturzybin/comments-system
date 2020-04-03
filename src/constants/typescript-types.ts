import firebase from 'firebase'


export type TAuthUser = null | firebase.User

export interface IGlobalState {
   authUser: {
      user: TAuthUser,
      username: string | null
   }
}