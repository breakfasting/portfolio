import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import logo from '../images/logo.png';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.contentWrap}>
      <img src={logo} alt="" className={styles.logo} />
      <span className={styles.resume}>
        <FiArrowDownCircle />
        Resume
      </span>
    </div>
  </header>
);

export default Header;
