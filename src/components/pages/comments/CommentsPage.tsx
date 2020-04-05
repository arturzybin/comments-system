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

   return (
      <div className="comments">
         <CommentForm />
         {commentsTemplate}
         <button onClick={loadComments} disabled={isCommentsOver}>Load more comments</button>
      </div>
   )
}