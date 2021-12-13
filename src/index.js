import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './reduxStore/index'


ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>

      <App/>
      
    </Provider>
  </React.StrictMode>
  </BrowserRouter>
,
  document.getElementById('root')
);


