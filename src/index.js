import React from 'react';
import ReactDOM from 'react-dom';
import { App, Counter, About } from './views';
import './styles/index.styl';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/counter"/>
      <Route path="/counter" component={Counter}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
