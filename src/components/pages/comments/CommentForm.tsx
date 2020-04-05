import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
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
         created: app.firestore.Timestamp.fromMillis(Date.now())
      }

      firebase
         .doCreateComment(comment)
         .then((docRef) => dispatch( createComment({ ...comment, docRef }) ))
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
         {
            authUser ?
            <button type="submit">Write as {username ? username : 'you'}</button>
            :
            <span><Link to={ROUTES.SIGN_IN}>Sign in</Link> to publish</span>
         }
      </form>
   )
}