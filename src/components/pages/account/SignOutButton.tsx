import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../../../firebase/FirebaseContext'
import * as ROUTES from '../../../constants/routes'


export const SignOutButton: React.FC = () => {
   const firebase = useContext(FirebaseContext)
   const history = useHistory()

   function handleClick() {
      firebase.doSignOut()
      history.push(ROUTES.COMMENTS)
   }

   return (
      <button onClick={handleClick} className="auth-form__input auth-form__button">
         Sign Out
      </button>
   )
}