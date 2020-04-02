import { useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'

import { TAuthUser } from '../constants/types'
import { changeAuthUser } from '../redux/actions'
import { FirebaseContext } from './Firebase'

export function useAuthentication() {
   const dispatch = useDispatch()
   const firebase = useContext(FirebaseContext)

   useEffect(() => {
      const unsubscribe = firebase.auth.onAuthStateChanged((authUser: TAuthUser) => {
         dispatch(changeAuthUser(authUser))
      })

      return unsubscribe
   // eslint-disable-next-line
   }, [])
}