import React from 'react'
import { CommentForm } from './CommentForm'
import { Comment } from './Comment'
import { useCommentsLoading } from './useCommenstLoading'

export const CommentsPage: React.FC = () => {
   const {comments, loadComments, isCommentsOver} = useCommentsLoading()

   const commentsTemplate = comments.map((comment) => <Comment key={comment.created.nanoseconds} comment={comment} />)

   return (
      <div className="comments">
         <CommentForm />
         {commentsTemplate}
         <button onClick={loadComments} disabled={isCommentsOver}>Load more comments</button>
      </div>
   )
}