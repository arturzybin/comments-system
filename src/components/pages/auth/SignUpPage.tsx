import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import validator from 'email-validator';

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import * as ROUTES from '../../../constants/routes'


export const SignUpPage: React.FC = () => {
   const history = useHistory()
   const firebase = useContext(FirebaseContext)

   const [username, setUsername] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [passwordOne, setPasswordOne] = useState<string>('')
   const [passwordTwo, setPasswordTwo] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()

      firebase
         .doCreateUserWithEmailAndPassword(email, passwordOne)
         .then((authUser) => {
            firebase
               .userDB(authUser.user?.uid)
               .set({ username, email })
         })
         .then(() => {
            setUsername('')
            setEmail('')
            setPasswordOne('')
            setPasswordTwo('')
            setError(null)

            history.push(ROUTES.COMMENTS)
         })
         .catch(setError)
   }


   let usernameClassName = 'auth-form__input'
   let emailClassName = 'auth-form__input'
   let passwordOneClassName = 'auth-form__input'
   let passwordTwoClassName = 'auth-form__input'
   usernameClassName += (username && username.length < 3) ? ' auth-form__input_invalid' : ''
   emailClassName += (email && !validator.validate(email)) ? ' auth-form__input_invalid' : ''
   passwordOneClassName += (passwordOne && passwordOne.length < 6) ? ' auth-form__input_invalid' : ''
   passwordTwoClassName += (passwordTwo && passwordTwo !== passwordOne) ? ' auth-form__input_invalid' : ''

   const isFormInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      !validator.validate(email) ||
      username === ''


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Sign Up</h2>

            <form onSubmit={handleSubmit}>
               <input
                  name="username"
                  className={usernameClassName}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  type="text"
                  placeholder="Username"
               />
               <input
                  name="email"
                  className={emailClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="Email Address"
               />
               <input
                  name="passwordOne"
                  className={passwordOneClassName}
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  type="password"
                  placeholder="Password"
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
                  Sign Up
               </button>

               {error && <p>{error.message}</p>}
            </form>

            <p className="auth-form__link">
               Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
         </div>
      </div>
   )
}