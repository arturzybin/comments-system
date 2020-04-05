import React, { useContext, useEffect } from 'react'
import app from 'firebase/app'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { setCommentLikes, setIsCommentLiked } from '../../../redux/actions'
import { IComment, IStore } from '../../../constants/typescript-types'

import heart from '../../../img/heart.svg'
import filledHeart from '../../../img/filled-heart.svg'


type TProps = { comment: IComment, commentIndex: number }

export const Comment: React.FC<TProps> = ({ comment, commentIndex }) => {
   const dispatch = useDispatch()
   const firebase = useContext(FirebaseContext)
   const authUser = useSelector((store: IStore) => store.authUserStore.authUser)


   useEffect(() => {
      loadCommentLikes()
      //eslint-disable-next-line
   }, [authUser])


   function loadCommentLikes() {
      const commentRef = comment.docRef as app.firestore.DocumentReference

      firebase.commentLikesRef(commentRef).get()
         .then((querySnapshot) => {
            const likesCount = querySnapshot.docs.length
            const isLiked = querySnapshot.docs.filter((doc) => doc.data().uid === authUser?.uid).length > 0
            dispatch( setCommentLikes(commentIndex, likesCount) )
            dispatch( setIsCommentLiked(commentIndex, isLiked) )
         })
   }


   function handleLike() {
      if (!authUser) return
      if (comment.likesCount === undefined || comment.isLiked === undefined) return

      const authUserLikeRef = firebase.commentLikesRef(comment.docRef as app.firestore.DocumentReference).doc(authUser?.uid)

      if (comment.isLiked) {
         dispatch( setCommentLikes(commentIndex, comment.likesCount - 1) )
         authUserLikeRef.delete()
      } else {
         dispatch( setCommentLikes(commentIndex, comment.likesCount + 1) )
         authUserLikeRef.set({ uid: authUser?.uid })
      }

      dispatch( setIsCommentLiked(commentIndex, !comment.isLiked) )
   }

   
   const heartSrc = comment.isLiked ? filledHeart : heart

   return (
      <div className="comment">
         <div className="comment__author">{comment.authorUsername}</div>
         <div className="comment__created">{moment.unix(comment.created.seconds).fromNow()}</div>
         <p>{comment.text}</p>
         <button className="comment__like" onClick={handleLike}>
            <img src={heartSrc} alt="like" width="20px"/>{comment.likesCount}
         </button>
         <button className="comment__reply">Reply</button>
         <hr />
      </div>
   )
}