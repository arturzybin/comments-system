import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../firebase/FirebaseContext'


export const PasswordChangeForm: React.FC = () => {
   const firebase = useContext(FirebaseContext)

   const [passwordOne, setPasswordOne] = useState<string>('')
   const [passwordTwo, setPasswordTwo] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()

      firebase
         .doPasswordUpdate(passwordOne)
         .then(() => {
            setPasswordOne('')
            setPasswordTwo('')
            setError(null)
         })
         .catch(setError)
   }

   const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

   return (
      <form onSubmit={handleSubmit}>
         <input
            name="passwordOne"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            type="password"
            placeholder="New Password"
         />
         <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            type="password"
            placeholder="Confirm New Password"
         />
         <button disabled={isInvalid} type="submit">
            Change My Password
            </button>

         {error && <p>{error.message}</p>}
      </form>
   )
}