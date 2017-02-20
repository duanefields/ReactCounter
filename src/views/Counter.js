import React, { Component } from 'react';
import { ClickList } from '../components';
import { ClickStore } from '../lib/stores';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <ClickList store={ClickStore} />
      </div>
    );
  }
}
