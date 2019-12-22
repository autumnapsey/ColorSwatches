// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';
import styles from './Profile.css';
// import ColorSquare from './ColorSquare';

const enhance = compose(
  withRouter,
  withProps(({ match }) => (
    ({ color: match.params.color})
  ))
)

const Profile = ({ color }) => (
  <div className={styles.cart}>
    <div className={styles.title}> Current color: </div>
        {'#' + color}
  </div>
);

export default enhance(Profile);
