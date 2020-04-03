import React, { useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import validator from 'email-validator';

import { FirebaseContext } from '../../firebase/FirebaseContext'
import { IGlobalState } from '../../constants/typescript-types'
import * as ROUTES from '../../constants/routes'


export const PasswordResetPage: React.FC = () => {
   const history = useHistory()
   const firebase = useContext(FirebaseContext)
   
   const authUser = useSelector((state: IGlobalState) => state.authUser)
   const authUserEmail: string = authUser?.email ? authUser.email : ''

   const [email, setEmail] = useState<string>(authUserEmail)
   const [error, setError] = useState<Error | null>(null)

   function handleReset(): void {
      firebase
         .doPasswordReset(email)
         .then(() => {
            setEmail('')
            setError(null)

            history.push(ROUTES.SIGN_IN)
         })
         .catch(setError)
   }


   let emailClassName = 'auth-form__input'
   emailClassName += (email && !validator.validate(email)) ? ' auth-form__input_invalid' : ''

   const isFormInvalid = !validator.validate(email)


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Reset Password</h2>

            <form onSubmit={handleReset}>
               <input
                  name="email"
                  className={emailClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="Email Address"
               />
               <button disabled={isFormInvalid} type="submit" className="auth-form__input auth-form__submit-button">
                  Send reset email
               </button>

               {error && <p>{error.message}</p>}
            </form>

            <p className="auth-form__link">
               Recall password? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
         </div>
      </div>
   )
}