// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';
import styles from './Profile.css';
import { Link } from 'react-router-dom';
// import ColorSquare from './ColorSquare';

const enhance = compose(
  withRouter,
  withProps(({ match }) => (
    ({ color: match.params.color})
  ))
)

const Profile = ({ color }) => (
  <div className={styles.profile}>
    <div className={styles.swatch}>
    <div
      className={styles.color}
      style={{ backgroundColor: '#' + color }}
    >
    </div>
    <div className={styles.label}>{'#' + color}</div>
    </div>
    <div className={styles.clearContainer}>
      <div className={styles.clear}>
        <Link to="/"> Clear </Link>
      </div>
    </div>
  </div>
);

export default enhance(Profile);
