// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { Route } from 'react-router-dom';
import styles from '../style.css';
import List from './List';
import Cart from './Cart';

const enhance = compose(
  connect(
    ({ squaresTotal }) => ({ squaresTotal }),
    {
      setSquareTotal: squares => ({
        type: 'SET_SQUARE_TOTAL',
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
        this.props.container().getBoundingClientRect().width / 143,
      );
      const squaresHeight = Math.ceil(
        this.props.container().getBoundingClientRect().height / 142,
      );
      const squaresTotal = squaresWidth * squaresHeight;
      this.props.setSquareTotal(squaresTotal);
    },
  }),
  withProps(),
);

const Main = ({ onRef }: { onRef: Function }) => (
  <div className={styles.main} ref={onRef}>
    <Route exact path="/" component={List} />
    <Route exact path="/cart" component={Cart} />
  </div>
);

export default enhance(Main);
