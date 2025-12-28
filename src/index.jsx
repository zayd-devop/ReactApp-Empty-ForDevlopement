import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//importations
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import reducer from './store/reducer';
//
// creation store
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // provider
  <Provider store={store}>
    <App />
  </Provider>
  //
);

