import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { useSelector } from 'react-redux'
import app from 'firebase/app'
import { IStore, IComment } from '../../../constants/typescript-types'


export const CommentForm: React.FC = () => {
   const firebase = useContext(FirebaseContext)
   const { user: authUser, username } = useSelector((state: IStore) => state.authUser)
   const [text, setText] = useState<string>('')


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()
      if (!authUser || !username) return

      const comment: IComment = {
         authorUsername: username,
         authorUID: authUser?.uid,
         text,
         created: app.firestore.Timestamp.fromMillis(Date.now()),
         likesCount: 0
      }

      firebase
         .doCreateComment(comment)
         .then((docRef) => console.log("Document written with ID: ", docRef.id))
         .then(() => setText(''))
         .catch((error) => console.error("Error adding document: ", error))
   }

   return (
      <form onSubmit={handleSubmit}>
         <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            maxLength={1000}
            placeholder="Write a comment..."
         >
         </textarea>
         <button type="submit">Write as You</button>
      </form>
   )
}