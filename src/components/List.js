// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderNothing,
  withHandlers,
  withProps,
} from 'recompose';
import styles from './List.css';
import { fetchColors } from '../utility/generateColors';
import ColorSquare from './ColorSquare';

const enhance = compose(
  connect(
    ({ colorOptions, squaresPerPage, currentPage }) => ({
      colorOptions,
      squaresPerPage,
      currentPage,
    }),
    {
      populateColorOptions: colors => ({
        type: 'POPULATE_COLOR_OPTIONS',
        colors,
      }),
      changeCurrentPage: pageNumber => ({
        type: 'CHANGE_CURRENT_PAGE',
        pageNumber,
      }),
    },
  ),
  branch(({ squaresPerPage }) => squaresPerPage === 0, renderNothing),
  withHandlers({
    loadMore: ({ changeCurrentPage }) => (pageSelection) => () => {
      console.log(pageSelection)
      changeCurrentPage(pageSelection)
    },
  }),
  lifecycle({
    componentDidMount() {
        this.props.populateColorOptions(fetchColors(100))
    },
  }),
  withProps(({ colorOptions, squaresPerPage, currentPage }) => (
    ({ pageSelection: () => {
      const colorBegin = currentPage * squaresPerPage;
      const colorEnd = colorBegin + squaresPerPage;
      return colorOptions.slice(colorBegin, colorEnd) 
      },
      totalPages: Array.from(Array(Math.ceil(colorOptions.length / squaresPerPage)).keys()),
    })
  ))
);

const List = ({
  pageSelection,
  loadMore,
  totalPages,
  currentPage,
}: {
  pageSelection: Array,
  loadMore: Function,
}) => (
  <div className={styles.list}>
    {pageSelection().map(option => (
      <ColorSquare color={option} key={option} />
    ))}
    <div className={styles.load}>
      {totalPages.map( i =>
      <span key={i} onClick={loadMore(i)} className={`${styles.pageNumber} ${currentPage === i ? styles.currentPage : ''}`}>
      {i + 1}
    </span>
      )}
    </div>
  </div>
);

export default enhance(List);
