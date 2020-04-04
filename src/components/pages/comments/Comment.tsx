import React from 'react'
import moment from 'moment'

import { IComment } from '../../../constants/typescript-types'
import heart from '../../../img/heart.svg'

type TProps = { comment: IComment }

export const Comment: React.FC<TProps> = ({ comment }) => {
   return (
      <div className="comment">
         <div className="comment__author">{comment.authorUsername}</div>
         <div className="comment__created">{moment.unix(comment.created.seconds).fromNow()}</div>
         <p>{comment.text}</p>
         <button className="comment__like"><img src={heart} alt="like" width="20px" />{comment.likesCount}</button>
         <button className="comment__reply">Reply</button>
         <hr />
      </div>
   )
}