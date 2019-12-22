// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import styles from './Header.css';
import LogoSymbol from '../../design/logo-symbol.svg';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.logoSymbol}>
      <Link to="/">
        <ReactSVG src={LogoSymbol} />
      </Link>
    </div>
    <div className={styles.search}>
      search bar
    </div>
  </div>
);

export default Header;
