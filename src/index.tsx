import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import { rootReducer } from './redux/rootReducer';

import { App } from './App';
import { Firebase, FirebaseContext } from './firebase/FirebaseContext';


const persistConfig = {
   key: 'root',
   blacklist: ['commentsStore'],
   storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: any = createStore(persistedReducer)
const persistor = persistStore(store)


render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <FirebaseContext.Provider value={Firebase}>
               <App />
            </FirebaseContext.Provider>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);