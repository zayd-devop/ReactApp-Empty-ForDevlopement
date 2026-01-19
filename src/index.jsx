import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {combineReducers, legacy_createStore} from 'redux';
import {HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import reducer1 from './store/reducer1';
import reducer2 from './store/reducer2';
import reducer3 from './store/reducer3';

const store = legacy_createStore(combineReducers({r_produits:reducer1,r_panier:reducer2,r_auth:reducer3}) )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> 
    <Provider store={store}>
    <App />
    </Provider>
    </HashRouter>
  </React.StrictMode>
);

