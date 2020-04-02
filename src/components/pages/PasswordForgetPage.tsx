import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'

import { FirebaseContext } from '../../firebase/FirebaseContext'
import { IGlobalState } from '../../constants/typescript-types'


export const PasswordForgetPage: React.FC = () => (
   <>
      <h2>Reset Password</h2>
      <PasswordForgetButton />
   </>
)


export const PasswordForgetButton: React.FC = () => {
   const firebase = useContext(FirebaseContext)

   const authUser = useSelector((state: IGlobalState) => state.authUser)
   const email = authUser?.email

   const [error, setError] = useState<Error | null>(null)

   function handleReset(): void {
      firebase
         .doPasswordReset(email)
         .then(() => {
            setError(null)
         })
         .catch(setError)
   }


   return (
      <>
         <button onClick={handleReset}>
            Reset My Password
         </button>

         {error && <p>{error.message}</p>}
      </>
   )
}