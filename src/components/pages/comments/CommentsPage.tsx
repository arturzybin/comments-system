import React from 'react'

import { CommentForm } from './CommentForm'
import { Loading } from './Loading'
import { Comment } from './Comment'
import { useCommentsLoading } from './useCommentsLoading'


export const CommentsPage: React.FC = () => {
   const { comments, loadComments, isCommentsOver, isLoading } = useCommentsLoading()

   const commentsTemplate = comments.map((comment, index) => (
      <Comment
         key={comment.created.nanoseconds}
         commentIndex={index}
         comment={comment}
      />
   ))


   const showLoader: boolean = !isCommentsOver && !comments.length
   const showLoadButton: boolean = !isCommentsOver && !isLoading

   return (
      // showLoader
      //    ?
      //    <Loading />
      //    :
      //    <div className="comments">
      //       <CommentForm />
      //       {commentsTemplate}
      //       {showLoadButton && <button onClick={loadComments}>Load more comments</button>}
      //    </div >
      <Loading />
   )
}