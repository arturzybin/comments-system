import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../../firebase/FirebaseContext'


export const PasswordUpdateForm: React.FC = () => {
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

   let passwordOneClassName = 'form__input'
   let passwordTwoClassName = 'form__input'
   passwordOneClassName += (passwordOne && passwordOne.length < 6) ? ' form__input_invalid' : ''
   passwordTwoClassName += (passwordTwo && passwordTwo !== passwordOne) ? ' form__input_invalid' : ''

   const isFormInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6


   return (
      <form onSubmit={handleSubmit}>
         <input
            name="passwordOne"
            className={passwordOneClassName}
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
            type="password"
            placeholder="New Password"
         />
         <input
            name="passwordTwo"
            className={passwordTwoClassName}
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value)}
            type="password"
            placeholder="Confirm Password"
         />
         <button disabled={isFormInvalid} type="submit" className="form__input form__button">
            Update password
               </button>

         {error && <p className="form__error">{error.message}</p>}
      </form>
   )
}