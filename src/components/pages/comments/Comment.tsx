import React from 'react'
import { IComment } from '../../../constants/typescript-types'


type TProps = { comment: IComment }

export const Comment: React.FC<TProps> = ({ comment }) => (
   <>
      <h4>{comment.authorUsername}</h4>
      <div>{comment.text}</div>
      <hr />
   </>
)