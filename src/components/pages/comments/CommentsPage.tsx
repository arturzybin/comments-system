import React from 'react'
import { CommentForm } from './CommentForm'
import { Comment } from './Comment'
import { useCommentsLoading } from './useCommentsLoading'

export const CommentsPage: React.FC = () => {
   const { comments, loadComments, isCommentsOver } = useCommentsLoading()

   const commentsTemplate = comments.map((comment, index) => (
      <Comment
         key={comment.created.nanoseconds}
         commentIndex={index}
         comment={comment}
      />
   ))


   const showLoader: boolean = !isCommentsOver && !comments.length
   const showLoadButton: boolean = !isCommentsOver


   return (
      showLoader ?
         <p>Loading...</p>
         :
         <div className="comments">
            < CommentForm />
            {commentsTemplate}
            
            {showLoader && <button onClick={loadComments}>Load more comments</button>}
         </div >
   )
}