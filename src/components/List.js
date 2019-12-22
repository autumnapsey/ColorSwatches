// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withHandlers,
} from 'recompose';
import styles from './List.css';
import fetchColors from '../actions/fetchColors';
import ColorSquare from './ColorSquare';
import updateColorOptions from '../actions/updateColorOptions';

const enhance = compose(
  connect(
    ({ colorOptions, squaresTotal, cartColors }) => ({
      colorOptions,
      squaresTotal,
      cartColors,
    }),
    {
      populateColorOptions: colors => ({
        type: 'POPULATE_COLOR_OPTIONS',
        colors,
      }),
    },
  ),
  branch(({ squaresTotal }) => squaresTotal === 0, renderNothing),
  withHandlers({
    loadMore: ({ squaresTotal, populateColorOptions }) => () => () => {
       populateColorOptions(fetchColors(squaresTotal))
    },
  }),
  lifecycle({
    componentDidMount() {
        this.props.populateColorOptions(fetchColors(this.props.squaresTotal * 2))
    },
    componentWillUnmount() {
      updateColorOptions();
    },
  }),
);

const List = ({
  colorOptions,
  loadMore,
}: {
  colorOptions: Array,
  loadMore: Function,
}) => (
  <div className={styles.list}>
    {colorOptions.map(option => (
      <ColorSquare color={option} key={option} />
    ))}
    <div className={styles.load}>
      <button onClick={loadMore()} className={styles.button}>
        Load More
      </button>
    </div>
  </div>
);

export default enhance(List);
