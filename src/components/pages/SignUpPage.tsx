import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import validator from 'email-validator';

import { FirebaseContext } from '../../firebase/FirebaseContext'
import * as ROUTES from '../../constants/routes'


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
               .user(authUser.user?.uid)
               .set({ email })
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


   const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      !validator.validate(email) ||
      username === ''


   return (
      <>
         <h2>Sign Up</h2>
         <form onSubmit={handleSubmit}>
            <input
               name="username"
               value={username}
               onChange={(event) => setUsername(event.target.value)}
               type="text"
               placeholder="Full Name"
            />
            <input
               name="email"
               value={email}
               onChange={(event) => setEmail(event.target.value)}
               type="text"
               placeholder="Email Address"
            />
            <input
               name="passwordOne"
               value={passwordOne}
               onChange={(event) => setPasswordOne(event.target.value)}
               type="password"
               placeholder="Password"
            />
            <input
               name="passwordTwo"
               value={passwordTwo}
               onChange={(event) => setPasswordTwo(event.target.value)}
               type="password"
               placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">
               Sign Up
            </button>

            {error && <p>{error.message}</p>}
         </form>
      </>
   )
}