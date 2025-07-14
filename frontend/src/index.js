import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Navbar from "./Components/NavBar/navbar"
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import {Provider} from 'react-redux';

store.subscribe(()=>
  store.getState()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <App />
    </BrowserRouter>
  </Provider>
);

