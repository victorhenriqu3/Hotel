import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Pages/HomePage'
import Register from './Pages/Register'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={HomePage} exact/>
    <Route path="/register" component={Register} />

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
