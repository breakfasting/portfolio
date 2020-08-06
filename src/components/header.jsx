import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import logo from '../images/logo.png';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.contentWrap}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.rightNav}>
        <div className={styles.resume}>
          <FiArrowDownCircle />
          <span>
            Resume
          </span>
        </div>
        <span>
          Projects
        </span>
        <span>
          About
        </span>
      </div>
    </div>
  </header>
);

export default Header;
