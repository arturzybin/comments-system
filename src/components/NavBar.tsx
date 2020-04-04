import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import { TAuthUser, IGlobalState } from '../constants/typescript-types'

import avatarSrc from '../img/avatar.svg'
import commentsSrc from '../img/comments.svg'


export const NavBar: React.FC = () => {
   const authUser: TAuthUser = useSelector((state: IGlobalState) => state.authUser.user)
   const isCurrentPageComments = (useLocation().pathname === ROUTES.COMMENTS)

   const commentsClassname = (isCurrentPageComments) ? 'navbar__button navbar__button_pressed' : 'navbar__button'
   const accountClassname = (isCurrentPageComments) ? 'navbar__button' : 'navbar__button navbar__button_pressed'

   let username = useSelector((state: IGlobalState) => state.authUser.username)
   if (!username) username = 'Loading...'


   return (
      <nav className="navbar">
         <Link to={ROUTES.COMMENTS} className={commentsClassname}>
            <img className="navbar__img" src={commentsSrc} alt="Comments" />
         </Link>

         {authUser ?
            <Link to={ROUTES.ACCOUNT} className={accountClassname}>{username}</Link>
            :
            <Link to={ROUTES.SIGN_IN} className={accountClassname}>
               <img className="navbar__img" src={avatarSrc} alt="Sign In" />
            </Link>
         }
      </nav>
   )
}