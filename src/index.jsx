import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import authReducer from './store/authReducer';
import productReducer from './store/productReducer';
import { Provider } from 'react-redux';
import { legacy_createStore,combineReducers } from 'redux';

const reducers = combineReducers({auth:authReducer,prd:productReducer})

const store = legacy_createStore(reducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

