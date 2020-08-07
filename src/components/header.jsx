import React from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import logo from '../images/logo.png';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.contentWrap}>
      <AnchorLink to="/" title="Home">
        <img src={logo} alt="" className={styles.logo} />
      </AnchorLink>
      <div className={styles.rightNav}>
        <div className={styles.resume}>
          <FiArrowDownCircle />
          <span>
            Resume
          </span>
        </div>
        <AnchorLink to="/#projects" title="My Projects" stripHash>
          <span>
            Projects
          </span>
        </AnchorLink>
        <AnchorLink to="/about" title="About me">
          <span>
            About
          </span>
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
