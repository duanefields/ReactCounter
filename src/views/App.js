import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="navbar-brand" to="/">My App</Link>

          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
