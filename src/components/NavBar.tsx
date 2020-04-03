import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import { TAuthUser, IGlobalState } from '../constants/typescript-types'

import avatarSrc from '../img/avatar.svg'
import commentsSrc from '../img/comments.svg'


export const NavBar: React.FC = () => {
   const authUser: TAuthUser = useSelector((state: IGlobalState) => state.authUser)

   return (
      <nav className="navbar">
         {authUser ? <AuthNavBar /> : <NonAuthNavBar />}
      </nav>
   )
}


const AuthNavBar: React.FC = () => (
   <>
      <Link to={ROUTES.COMMENTS} className="navbar__comments">
         <img className="navbar__img" src={commentsSrc} alt="Comments" />
      </Link>
      <Link to={ROUTES.ACCOUNT} className="navbar__account">
         <img className="navbar__img" src={avatarSrc} alt="Sign In" />
      </Link>
   </>
)

const NonAuthNavBar: React.FC = () => (
   <>
      <Link to={ROUTES.COMMENTS} className="navbar__comments">
         <img className="navbar__img" src={commentsSrc} alt="Comments" />
      </Link>
      <Link to={ROUTES.SIGN_IN} className="navbar__account">
         <img className="navbar__img" src={avatarSrc} alt="Sign In" />
      </Link>
   </>
)