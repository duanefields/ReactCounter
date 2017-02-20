import React, { Component } from 'react';
import { Link } from 'react-router'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About This App</h1>
        <p>Just a test...</p>
        <Link to="/">Back to App</Link>
      </div>
    );
  }
}
