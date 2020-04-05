import React from 'react'
import app from 'firebase/app'

import { ResponseForm } from './ResponseForm'
import { Response } from './Response'

import { useResponsesLoading } from './useResponsesLoading'
import { IComment } from '../../../../constants/typescript-types'


type TProps = { comment: IComment, commentIndex: number, showForm: boolean }

export const Responses: React.FC<TProps> = ({ comment, commentIndex, showForm }) => {
   const { responses, loadResponses, isResponsesOver } = useResponsesLoading(comment, commentIndex)

   const responsesTemplate = responses?.map((response, index) => (
      <Response
         key={response.created.nanoseconds}
         responseIndex={index}
         commentIndex={commentIndex}
         response={response}
      />
   ))


   const showLoadButton: boolean = !isResponsesOver

   return (
      <div className="responses">
         {showForm &&
            <ResponseForm
               commentRef={comment.docRef as app.firestore.DocumentReference}
               commentIndex={commentIndex}
            />
         }
         
         {responsesTemplate}
         {showLoadButton && <button onClick={loadResponses}>Load more responses</button>}
      </div>
   )
}