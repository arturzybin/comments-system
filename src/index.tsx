import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './redux/rootReducer';

import { App } from './App';
import { Firebase, FirebaseContext } from './firebase/FirebaseContext';



const store = createStore(rootReducer)

render(
   <React.StrictMode>
      <Provider store={store}>
         <FirebaseContext.Provider value={Firebase}>
            <App />
         </FirebaseContext.Provider>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);