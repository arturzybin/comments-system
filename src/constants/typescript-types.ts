import firebase from 'firebase'
import app from 'firebase/app'


export type TAuthUser = null | firebase.User

export interface IStore {
   authUserStore: {
      authUser: TAuthUser,
      username: string | null
   },
   commentsStore: {
      comments: IComment[],
      isCommentsOver: boolean
   }
}


export interface IComment {
   authorUsername: string,
   authorUID: string,
   text: string,
   created: app.firestore.Timestamp,
   // only inside redux store, not inside firebase
   docRef?: app.firestore.DocumentReference,
   likesCount?: number,
   isLiked?: boolean,
   responses?: IResponse[],
   isResponsesOver?: boolean
}

export interface IResponse {
   authorUsername: string,
   authorUID: string,
   text: string,
   created: app.firestore.Timestamp,
   // only inside redux store, not inside firebase
   docRef?: app.firestore.DocumentReference,
   likesCount?: number,
   isLiked?: boolean,
}