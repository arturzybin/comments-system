import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { SignOutButton } from './SignOutButton'

import { withAuthorisation } from '../../../firebase/withAuthorisation'
import { TAuthUser, IGlobalState } from '../../../constants/typescript-types'
import * as ROUTES from '../../../constants/routes'


const AccountPageBase: React.FC = () => {
   let { user: authUser, username } = useSelector((state: IGlobalState) => state.authUser)
   if (!username) username = 'Loading ...'
   const email = authUser?.email

   return (
      <div className="auth-form-background">
         <div className="auth-form">
            <h2 className="auth-form__title auth-form__username">{username}</h2>
            <h2 className="auth-form__title auth-form__email">{email}</h2>
            
            <button className="auth-form__input auth-form__submit-button">
               <Link to={ROUTES.PASSWORD_UPDATE}>Update password</Link>
            </button>
            <SignOutButton />
         </div>
      </div>
   )
}

const condition = (authUser: TAuthUser) => !!authUser

export const AccountPage = withAuthorisation(condition)(AccountPageBase)