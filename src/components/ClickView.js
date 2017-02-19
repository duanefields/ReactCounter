import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
export default class ClickView extends Component {

  render() {
    const click = this.props.click;
    return (
      <li className="list-group-item">
        Client: {`${click.date}`}, Server: {`${click.serverDate}`}
      </li>
    );
  }
}
