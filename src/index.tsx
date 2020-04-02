import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { Firebase, FirebaseContext } from './firebase/Firebase';

render(
   <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase()}>
         <App />
      </FirebaseContext.Provider>
   </React.StrictMode>,
   document.getElementById('root')
);