import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../../firebase/FirebaseContext'


export const PasswordUpdatePage: React.FC = () => {
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

   let passwordOneClassName = 'auth-form__input'
   let passwordTwoClassName = 'auth-form__input'
   passwordOneClassName += (passwordOne && passwordOne.length < 6) ? ' auth-form__input_invalid' : ''
   passwordTwoClassName += (passwordTwo && passwordTwo !== passwordOne) ? ' auth-form__input_invalid' : ''

   const isFormInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Update Password</h2>

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
               <button disabled={isFormInvalid} type="submit" className="auth-form__input auth-form__submit-button">
                  Update password
               </button>

               {error && <p>{error.message}</p>}
            </form>
         </div>
      </div>
   )
}