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
import { fetchColors } from '../utility/generateColors';
import ColorSquare from './ColorSquare';

const enhance = compose(
  connect(
    ({ colorOptions, squaresPerPage, cartColors }) => ({
      colorOptions,
      squaresPerPage,
      cartColors,
    }),
    {
      populateColorOptions: colors => ({
        type: 'POPULATE_COLOR_OPTIONS',
        colors,
      }),
    },
  ),
  branch(({ squaresPerPage }) => squaresPerPage === 0, renderNothing),
  withHandlers({
    loadMore: ({ squaresPerPage, populateColorOptions }) => () => () => {
      console.log(fetchColors(squaresPerPage))
      populateColorOptions(fetchColors(squaresPerPage))
    },
  }),
  lifecycle({
    componentDidMount() {
        this.props.populateColorOptions(fetchColors(this.props.squaresPerPage))
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
