import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { SignOutButton } from './SignOutButton'

import * as ROUTES from '../constants/routes'
import { TAuthUser, IGlobalState } from '../constants/typescript-types'



export const NavBar: React.FC = () => {
   const authUser: TAuthUser = useSelector((state: IGlobalState) => state.authUser)

   return (
      <nav className="navbar">
         {authUser ? <AuthNavBar /> : <NonAuthNavBar />}
         <SignOutButton />
      </nav>
   )
}


const AuthNavBar: React.FC = () => (
   <ul>
      <li>
         <Link to={ROUTES.COMMENTS}>Comments</Link>
      </li>
      <li>
         <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
   </ul>
)

const NonAuthNavBar: React.FC = () => (
   <ul>
      <li>
         <Link to={ROUTES.COMMENTS}>Comments</Link>
      </li>
      <li>
         <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
         <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
   </ul>
)