import React from 'react'

import { PasswordChangeForm } from '../PasswordChangeForm'
import { SignOutButton } from '../SignOutButton'
import { withAuthorisation } from '../../firebase/withAuthorisation'
import { TAuthUser } from '../../constants/typescript-types'


const AccountPageBase: React.FC = () => (
   <>
      <h2>AccountPage</h2>
      <PasswordChangeForm />
      <SignOutButton />
   </>
)

const condition = (authUser: TAuthUser) => !!authUser

export const AccountPage = withAuthorisation(condition)(AccountPageBase)