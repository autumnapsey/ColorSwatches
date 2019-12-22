// @flow
import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import styles from './ColorSquare.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const enhance = compose(
  connect(
    ({ hoverColor }) => ({ hoverColor }),
    {
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
  withHandlers({
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
  toggleHovering,
}: {
  color: String,
  toggleHovering: Function,
}) => (
  <Link to={`/profile/${color}`}>
    <div
      className={styles.square}
      onMouseEnter={toggleHovering(color)}
      onMouseLeave={toggleHovering(color)}
    >
      <div className={styles.color}
        style={{ backgroundColor: '#' + color }}
      ></div>
      <span className={styles.label}>{'#' + color}</span>
    </div>
  </Link>

);

export default enhance(ColorSquare);
