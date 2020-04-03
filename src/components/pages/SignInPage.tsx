import React, { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom';
import validator from 'email-validator';

import { FirebaseContext } from '../../firebase/FirebaseContext'
import * as ROUTES from '../../constants/routes'


export const SignInPage: React.FC = () => {
   const history = useHistory()
   const firebase = useContext(FirebaseContext)

   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [error, setError] = useState<Error | null>(null)


   function handleSubmit(event: React.FormEvent) {
      event.preventDefault()

      firebase
         .doSignInWithEmailAndPassword(email, password)
         .then(() => {
            setEmail('')
            setPassword('')
            setError(null)

            history.push(ROUTES.COMMENTS)
         })
         .catch(setError)
   }


   const isInvalid = password.length < 6 || !validator.validate(email)


   return (
      <>
         <h2>Sign In</h2>

         <form onSubmit={handleSubmit}>
            <input
               name="email"
               value={email}
               onChange={(event) => setEmail(event.target.value)}
               type="text"
               placeholder="Email Address"
            />
            <input
               name="password"
               value={password}
               onChange={(event) => setPassword(event.target.value)}
               type="password"
               placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">
               Sign In
            </button>

            {error && <p>{error.message}</p>}
         </form>
         
         <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
         </p>
         <p>
            Forgot password? <Link to={ROUTES.PASSWORD_RESET}>Reset</Link>
         </p>
      </>
   )
}