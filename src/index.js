import React from 'react';
import ReactDOM from 'react-dom';
import { App, About } from './views';
import './styles/index.styl';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('root')
);
