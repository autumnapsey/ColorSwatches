// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactSVG from 'react-svg';
import styles from './Header.css';
import LogoSymbol from '../../design/logo-symbol.svg';
import { compose, withHandlers } from 'recompose';

const enhance = compose(
  withRouter,
  withHandlers({
    searchColor: () => history => e => {
      // TODO: fix this to work if # is entered
      const validHexColor = /^(?:[0-9a-f]{3}){1,2}$/i.test(e.target.value)
      if (e.keyCode === 13 && validHexColor) {
        console.log(e.target.value)
        history.push(`/profile/${e.target.value}`)
      }
    },
  }),
)

const Header = ({ history, searchColor }) => console.log(history) || (
  <div className={styles.header}>
    <div className={styles.logoSymbol}>
      <Link to="/">
        <ReactSVG src={LogoSymbol} />
      </Link>
    </div>
    <div className={styles.search}>
      <input className={styles.searchBar}
        placeholder="Search"
        onKeyUp={searchColor(history)}
      ></input>
    </div>
  </div>
);

export default enhance(Header);
