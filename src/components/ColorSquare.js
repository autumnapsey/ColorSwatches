// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps } from 'recompose';
import ReactSVG from 'react-svg';
import styles from './ColorSquare.css';
import saveCart from '../actions/saveCart';

const enhance = compose(
  connect(
    ({ cartColors, hoverColor }) => ({ cartColors, hoverColor }),
    {
      addColor: color => ({
        type: 'ADD_COLOR',
        color,
      }),
      removeColor: color => ({
        type: 'REMOVE_COLOR',
        color,
      }),
      setHoverColor: color => ({
        type: 'SET_HOVER_COLOR',
        color,
      }),
      clearHoverColor: color => ({
        type: 'CLEAR_HOVER_COLOR',
        color,
      }),
    },
  ),
  withProps(({ cartColors }) => ({
    inCart: color => cartColors.includes(color),
  })),
  withHandlers({
    updateColor: ({
      addColor,
      removeColor,
      inCart,
      cartColors,
    }) => color => () => {
      // eslint-disable-next-line no-unused-expressions
      inCart(color) ? removeColor(color) : addColor(color);
      saveCart(cartColors);
    },
    toggleHovering: ({
      hoverColor,
      setHoverColor,
      clearHoverColor,
    }) => color => () =>
      hoverColor && hoverColor === color
        ? clearHoverColor(color)
        : setHoverColor(color),
  }),
);

const ColorSquare = ({
  color,
  updateColor,
  inCart,
  toggleHovering,
  hoverColor,
}: {
  color: String,
  updateColor: Function,
  inCart: Function,
  toggleHovering: Function,
  hoverColor: String,
}) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    className={`${styles.color} ${inCart(color) ? styles.inCart : ''}`}
    style={{ backgroundColor: color }}
    onClick={updateColor(color)}
    onMouseEnter={toggleHovering(color)}
    onMouseLeave={toggleHovering(color)}
  >
    {inCart(color) && hoverColor === color ? (
      <span className={styles.trash}>X</span>
    ) : (
      ''
    )}
    <span>{color}</span>
  </div>
);

export default enhance(ColorSquare);
