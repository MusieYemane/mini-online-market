import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './reduxStore/index'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App/>
    </BrowserRouter>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


