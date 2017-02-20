import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    const name = "Duane";
    return (
      <div>
        <nav>
          <h1>Hello, {name}</h1>
          <Link to="/counter">Counter</Link> |
          <Link to="/about">About</Link>
          <hr />
        </nav>

        {this.props.children}

      </div>

    );
  }
}
