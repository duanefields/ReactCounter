import React, { Component } from 'react';
import styles from './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.blue}>About This App</h1>
        <p>Just a test...</p>
      </div>
    );
  }
}
