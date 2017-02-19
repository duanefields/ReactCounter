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

        <button className="btn btn-primary" onClick={ this.onNewClick }>
          New Click
        </button>

        <ul className="list-group">
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
