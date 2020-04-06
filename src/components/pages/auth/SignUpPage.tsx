import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import * as ROUTES from '../../../constants/routes'
import { checkFormInvalid, getInputClassname } from '../validate';


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
      if (isFormInvalid) return

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


   let usernameClassName = getInputClassname('username', username)
   let emailClassName = getInputClassname('email', email)
   let passwordOneClassName = getInputClassname('passwordOne', passwordOne)
   let passwordTwoClassName = getInputClassname('passwordTwo', passwordTwo, passwordOne)

   const isFormInvalid = checkFormInvalid({ username, email, passwordOne, passwordTwo })


   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title">Sign Up</h2>

            <form onSubmit={handleSubmit}>
               <input
                  name="username"
                  className={usernameClassName}
                  value={username}
                  onChange={(event) => setUsername(event.target.value.replace(/ /g, ''))}
                  type="text"
                  placeholder="Username"
               />
               <input
                  name="email"
                  className={emailClassName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value.replace(/ /g, ''))}
                  type="text"
                  placeholder="Email Address"
               />
               <input
                  name="passwordOne"
                  className={passwordOneClassName}
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value.replace(/ /g, ''))}
                  type="password"
                  placeholder="Password"
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
                  Sign Up
               </button>

               {error && <p className="auth-form__error">{error.message}</p>}
            </form>

            <p className="auth-form__link">
               Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
            </p>
         </div>
      </div>
   )
}