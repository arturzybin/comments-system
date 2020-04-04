import firebase from 'firebase'
import app from 'firebase/app'


export type TAuthUser = null | firebase.User

export interface IGlobalState {
   authUser: {
      user: TAuthUser,
      username: string | null
   },
   comments: IComment[]
}


export interface IComment {
   authorUsername: string,
   authorUID: string,
   text: string,
   created: app.firestore.Timestamp,
   likesCount: number,
   index?: number
}