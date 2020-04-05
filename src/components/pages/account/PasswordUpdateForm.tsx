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
         ?.then(() => {
            setPasswordOne('')
            setPasswordTwo('')
            setError(null)
         })
         .catch(setError)
   }

   let passwordOneClassName = 'auth-form__input'
   let passwordTwoClassName = 'auth-form__input'
   passwordOneClassName += (passwordOne && passwordOne.length < 6) ? ' auth-form__input_invalid' : ''
   passwordTwoClassName += (passwordTwo && passwordTwo !== passwordOne) ? ' auth-form__input_invalid' : ''

   const isFormInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6


   return (
      <form onSubmit={handleSubmit}>
         <input
            name="passwordOne"
            className={passwordOneClassName}
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value.trim())}
            type="password"
            placeholder="New Password"
         />
         <input
            name="passwordTwo"
            className={passwordTwoClassName}
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value.trim())}
            type="password"
            placeholder="Confirm Password"
         />
         <button disabled={isFormInvalid} type="submit" className="auth-form__input auth-form__button">
            Update password
         </button>

         {error && <p className="auth-form__error">{error.message}</p>}
      </form>
   )
}