import React from 'react';
import logo from '../images/logo.png';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.contentWrap}>
      <img src={logo} alt="" className={styles.logo} />
      <span>
        My Resume
      </span>
    </div>
  </header>
);

export default Header;
