import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import app from 'firebase/app'

import { createComment } from '../../../redux/actions'
import * as ROUTES from '../../../constants/routes'
import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { IStore, IComment } from '../../../constants/typescript-types'


export const CommentForm: React.FC = () => {
   const history = useHistory()
   const dispatch = useDispatch()
   const firebase = useContext(FirebaseContext)

   const { authUser, username } = useSelector((store: IStore) => store.authUserStore)
   const [text, setText] = useState<string>('')


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()
      if (!username || !authUser) {
         if (!authUser) history.push(ROUTES.SIGN_IN)
         return
      }

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
         .then(() => dispatch( createComment(comment) ))
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