// @flow
import React from 'react';
import styles from './Sidebar.css';
import { withRouter } from 'react-router-dom';
import { randomColor } from '../actions/generateColors';

const Sidebar = ({ history }) => (
  <div className={styles.sidebar}>
    <div className={styles.randomContainer}>
      <div className={styles.random}
         onClick={() => { history.push(`/profile/${randomColor()}`) }}>
        Random Color
      </div>
    </div>
  </div>
);

export default withRouter(Sidebar);