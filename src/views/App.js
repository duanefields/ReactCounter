import React, { Component } from 'react';
import { Link } from 'react-router'
// import { Router, Route, browserHistory } from 'react-router';
// import { Provider } from 'mobx-react';
// import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { ClickList } from '../components';
import { ClickStore } from '../lib/stores';

export default class App extends Component {
  render() {
    const name = "Duane";
    return (
      <div>
        <h1>Hello, {name}</h1>
        <ClickList store={ClickStore} />
        <hr />
        <Link to="/about">About</Link>
      </div>
    );
  }
}
