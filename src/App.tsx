import React from 'react';

import { useAuthentication } from './firebase/useAuthentication';

import 'normalize.css'
import './styles/style'

export const App: React.FC = () => {
   useAuthentication()
   
   return (
      <div>
         App
      </div>
   );
}