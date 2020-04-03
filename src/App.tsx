import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useAuthentication } from './firebase/useAuthentication';
import * as ROUTES from './constants/routes'

import { NavBar } from './components/NavBar';
import { CommentsPage } from './components/pages/comments/CommentsPage';
import { SignInPage } from './components/pages/auth/SignInPage';
import { SignUpPage } from './components/pages/auth/SignUpPage';
import { PasswordResetPage } from './components/pages/auth/PasswordResetPage';
import { AccountPage } from './components/pages/account/AccountPage';
import { PasswordUpdatePage } from './components/pages/account/PasswordUpdatePage';

import 'normalize.css'
import './styles/style.scss'


export const App: React.FC = () => {
   useAuthentication()

   return (
      <Router>
         <NavBar />

         <Route exact path={ROUTES.COMMENTS} component={CommentsPage} />
         <Route path={ROUTES.SIGN_IN} component={SignInPage} />
         <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
         <Route path={ROUTES.PASSWORD_RESET} component={PasswordResetPage} />
         <Route path={ROUTES.ACCOUNT} component={AccountPage} />
         <Route path={ROUTES.PASSWORD_UPDATE} component={PasswordUpdatePage} />
      </Router>
   );
}