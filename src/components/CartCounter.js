import React from 'react';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import styles from './Header.css';

const enhance = compose(
  connect(({ cartColors }) => ({ cartColors })),
  withProps(({ cartColors }) => ({
    count: cartColors.length,
  })),
);

const CartCounter = ({ count }) => (
  <div className={styles.cartCounter}>{count}</div>
);

export default enhance(CartCounter);
