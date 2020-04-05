import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { IComment, IResponse } from '../constants/typescript-types';


const config = {
   apiKey: "AIzaSyDpt6WXqe7-GrSdSZxe1w1jD_h9XQIQWYA",
   authDomain: "comments-system-6e56a.firebaseapp.com",
   databaseURL: "https://comments-system-6e56a.firebaseio.com",
   projectId: "comments-system-6e56a",
   storageBucket: "comments-system-6e56a.appspot.com",
   messagingSenderId: "463788584226",
   appId: "1:463788584226:web:d0787997fe53b69d8d497b",
   measurementId: "G-LMGZ5VEP27"
};


export class FirebaseConstructor {
   auth: app.auth.Auth
   db: app.firestore.Firestore
   parentURL: string

   constructor() {
      app.initializeApp(config)
      this.auth = app.auth()
      this.db = app.firestore()
      this.parentURL = getParentURL()
   }


   // *** Auth API ***
   doCreateUserWithEmailAndPassword = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password)

   doSignInWithEmailAndPassword = (email: string, password: string) => this.auth.signInWithEmailAndPassword(email, password)

   doSignOut = () => this.auth.signOut()

   doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email)

   doPasswordUpdate = (password: string) => this.auth.currentUser?.updatePassword(password)


   // *** Firestore API ***
   userRef = (uid: string) => this.db.collection('users').doc(uid)

   // comment
   doCreateComment = (comment: IComment) => this.commentsRef().add(comment)

   commentsRef = () => this.db.collection('pages').doc(this.parentURL).collection('comments')

   commentLikesRef = (commentRef: app.firestore.DocumentReference) => commentRef.collection('likes')
   
   // response
   doCreateResponse = (commentRef: app.firestore.DocumentReference, response: IResponse) => this.responsesRef(commentRef).add(response)

   responsesRef = (commentRef: app.firestore.DocumentReference) => commentRef.collection('responses')

   responseLikesRef = (responseRef: app.firestore.DocumentReference) => responseRef.collection('likes')
}


function getParentURL(): string {
   const queryString = window.location.search.substring(1)
   const queries = queryString.split("&")

   for (let query of queries) {
      const pair = query.split('=')
      if (pair[0] === 'parentURL') return pair[1]
   }

   return 'default'
}