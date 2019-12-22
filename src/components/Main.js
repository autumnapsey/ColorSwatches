// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { Route } from 'react-router-dom';
import styles from '../style.css';
import List from './List';
import Profile from './Profile';

const enhance = compose(
  connect(
    ({ squaresPerPage }) => ({ squaresPerPage }),
    {
      setSquaresPerPage: squares => ({
        type: 'SET_SQUARES_PER_PAGE',
        squares,
      }),
    },
  ),
  withHandlers(() => {
    let container = null;

    return {
      // eslint-disable-next-line no-return-assign
      onRef: () => ref => (container = ref),
      container: () => () => container,
    };
  }),
  lifecycle({
    componentDidMount() {
      const squaresWidth = Math.floor(
        this.props.container().getBoundingClientRect().width / 182,
      );
      const squaresHeight = Math.floor(
        this.props.container().getBoundingClientRect().height / 182,
      );
      const squaresPerPage = squaresWidth * squaresHeight;
      this.props.setSquaresPerPage(squaresPerPage);
    },
  }),
  withProps(),
);

const Main = ({ onRef }: { onRef: Function }) => (
  <div className={styles.main} ref={onRef}>
    <Route exact path="/" component={List} />
    <Route exact path="/profile/:color" component={Profile} />
  </div>
);

export default enhance(Main);
