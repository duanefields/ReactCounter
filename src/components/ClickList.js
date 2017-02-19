import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { ClickView } from '.';

@observer
export default class ClickList extends Component {
  render() {
    const store = this.props.store;
    return (
      <div>
        <div>
          { store.report }
        </div>
        <button onClick={ this.onNewClick }>New Click</button>
        <ul>
        { store.clicks.map(
          (click, idx) => <ClickView click={ click } key={ idx } />
        ) }
        </ul>
        { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
      </div>
    );
  }

  onNewClick = () => {
    this.props.store.addClick();
  }
}
