import React, { useState } from 'react'

export const CommentForm: React.FC = () => {
   const [text, setText] = useState<string>('')

   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()
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