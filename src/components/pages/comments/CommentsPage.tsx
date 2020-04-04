import React from 'react'
import { CommentForm } from './CommentForm'
import { Comment } from './Comment'
import { useCommentsLoading } from './useCommenstLoading'

export const CommentsPage: React.FC = () => {
   const {comments, loadComments} = useCommentsLoading()

   const commentsTemplate = comments.map((comment) => <Comment key={comment.created.toMillis()} comment={comment} />)

   return (
      <div className="comments">
         <CommentForm />
         {commentsTemplate}
      </div>
   )
}