import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiArrowRightCircle } from 'react-icons/fi';
import styles from './hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.contentWrap}>
      <div className={styles.heroText}>
        <h1>
          &gt;_Hi! I&apos;m
          {' '}
          <AnchorLink to="/about" title="About me">
            <span className={styles.name}>Wayne Su</span>
          </AnchorLink>
          ,
        </h1>
      </div>
      <div className={styles.heroText}>
        <h1>
          A software engineer all about
          {' '}
          <u className={styles.code}>coding</u>
          {', '}
          <u className={styles.science}>data science</u>
          {' & '}
          <u className={styles.design}>visual design</u>
          !
        </h1>
      </div>
      <AnchorLink to="/about" title="About me">
        <div className={styles.about}>
          <span>
            Learn more about me
          </span>
          <FiArrowRightCircle />
        </div>
      </AnchorLink>
    </div>
  </div>
);

export default Hero;
