import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { TAuthUser, IGlobalState } from '../constants/types'

import * as ROUTES from '../constants/routes'


type TCondition = (authUser: TAuthUser) => boolean

export const withAuthorisation = (condition: TCondition) => (Component: React.FC) => {

   const WithAuthorisation: React.FC = (props) => {
      const history = useHistory()
      const authUser = useSelector((state: IGlobalState) => state.authUser)

      if (!condition(authUser)) {
         history.push(ROUTES.LOG_IN)
      }

      return authUser ? <Component {...props} /> : null
   }

   return WithAuthorisation
}