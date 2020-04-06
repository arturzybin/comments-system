import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../../firebase/FirebaseContext'
import { getInputClassname, checkFormInvalid } from '../validate'


export const PasswordUpdateForm: React.FC = () => {
   const firebase = useContext(FirebaseContext)

   const [passwordOne, setPasswordOne] = useState<string>('')
   const [passwordTwo, setPasswordTwo] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()
      if (isFormInvalid) return

      firebase
         .doPasswordUpdate(passwordOne)
         ?.then(() => {
            setPasswordOne('')
            setPasswordTwo('')
            setError(null)
         })
         .catch(setError)
   }

   let passwordOneClassName = getInputClassname('passwordOne', passwordOne)
   let passwordTwoClassName = getInputClassname('passwordTwo', passwordTwo, passwordOne)

   const isFormInvalid = checkFormInvalid({ passwordOne, passwordTwo })


   return (
      <form onSubmit={handleSubmit}>
         <input
            name="passwordOne"
            className={passwordOneClassName}
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value.replace(/ /g, ''))}
            type="password"
            placeholder="New Password"
         />
         <input
            name="passwordTwo"
            className={passwordTwoClassName}
            value={passwordTwo}
            onChange={(event) => setPasswordTwo(event.target.value.replace(/ /g, ''))}
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