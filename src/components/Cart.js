// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styles from './Cart.css';
import ColorSquare from './ColorSquare';

const enhance = compose(connect(({ cartColors }) => ({ cartColors })));

const Cart = ({ cartColors }: { cartColors: Array }) => (
  <div className={styles.cart}>
    <div className={styles.title}> Your current color palette</div>
    <div className={styles.colors}>
      {cartColors.map(color => (
        <ColorSquare color={color} key={color} />
      ))}
    </div>
  </div>
);

export default enhance(Cart);
