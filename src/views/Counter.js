import React, { Component } from 'react';
import { ClickList } from '../components';
import { ClickStore } from '../lib/stores';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <h1 className="blue">The Counter</h1>
        <ClickList store={ClickStore} />
      </div>
    );
  }
}
