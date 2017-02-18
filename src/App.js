import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';

import { ClickButton } from './components';

export default class App extends Component {
  render() {
    const name = "Duane";
    return (
      <div>
        <h1>Hello, {name}</h1>
        <ClickButton />
      </div>
    );
  }
}
