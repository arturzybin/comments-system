import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { useAuthentication } from './firebase/useAuthentication';
import * as ROUTES from './constants/routes'

import { NavBar } from './components/NavBar';
import { CommentsPage } from './components/pages/CommentsPage';
import { LogInPage } from './components/pages/LogInPage';
import { AccountPage } from './components/pages/AccountPage';
import { SignUpPage } from './components/pages/SignUpPage';
import { PasswordForgetPage } from './components/pages/PasswordForgetPage';

import 'normalize.css'
import './styles/style.scss'


export const App: React.FC = () => {
   useAuthentication()
   
   return (
      <BrowserRouter>
         <NavBar />
         <hr/>

         <Route exact path={ROUTES.COMMENTS} component={CommentsPage}/>
         <Route path={ROUTES.LOG_IN} component={LogInPage}/>
         <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
         <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
         <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      </BrowserRouter>
   );
}