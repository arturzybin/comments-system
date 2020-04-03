import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { useAuthentication } from './firebase/useAuthentication';
import * as ROUTES from './constants/routes'

import { NavBar } from './components/NavBar';
import { CommentsPage } from './components/pages/CommentsPage';
import { AccountPage } from './components/pages/AccountPage';
import { SignInPage } from './components/pages/SignInPage';
import { SignUpPage } from './components/pages/SignUpPage';
import { PasswordResetPage } from './components/pages/PasswordResetPage';

import 'normalize.css'
import './styles/style.scss'


export const App: React.FC = () => {
   useAuthentication()

   return (
      <BrowserRouter>
         <NavBar />

         <Route exact path={ROUTES.COMMENTS} component={CommentsPage}/>
         <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
         <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
         <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
         <Route path={ROUTES.PASSWORD_RESET} component={PasswordResetPage}/>
      </BrowserRouter>
   );
}