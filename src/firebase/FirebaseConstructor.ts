import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


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

   constructor() {
      app.initializeApp(config)
      this.auth = app.auth()
      this.db = app.firestore()
   }

   // *** Auth API ***
   doCreateUserWithEmailAndPassword = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password)

   doSignInWithEmailAndPassword = (email: string, password: string) => this.auth.signInWithEmailAndPassword(email, password)

   doSignOut = () => this.auth.signOut()

   doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email)

   doPasswordUpdate = (password: string) => this.auth.currentUser?.updatePassword(password)

   // *** Firestore API ***
   userRef = (uid: string) => this.db.collection('users').doc(uid)
}