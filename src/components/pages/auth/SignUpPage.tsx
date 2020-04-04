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
            const uid = authUser.user?.uid
            if (!uid) return
            
            firebase
               .userRef(uid)
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


   let usernameClassName = 'form__input'
   let emailClassName = 'form__input'
   let passwordOneClassName = 'form__input'
   let passwordTwoClassName = 'form__input'
   usernameClassName += (username && username.length < 3) ? ' form__input_invalid' : ''
   emailClassName += (email && !validator.validate(email)) ? ' form__input_invalid' : ''
   passwordOneClassName += (passwordOne && passwordOne.length < 6) ? ' form__input_invalid' : ''
   passwordTwoClassName += (passwordTwo && passwordTwo !== passwordOne) ? ' form__input_invalid' : ''

   const isFormInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      !validator.validate(email) ||
      username === ''


   return (
      <div className="form-background">
         <div className="form">
            <h2 className="form__title">Sign Up</h2>

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
               <button disabled={isFormInvalid} type="submit" className="form__input form__button">
                  Sign Up
               </button>

               {error && <p className="form__error">{error.message}</p>}
            </form>

            <p className="form__link">
               Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
         </div>
      </div>
   )
}