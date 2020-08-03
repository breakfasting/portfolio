import React from 'react';
import styles from './hero.module.scss';

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.contentWrap}>
      <div className={styles.heroText}>
        <h1>&gt;_Hi! I&apos;m Wayne Su,</h1>
      </div>
      <div className={styles.heroText}>
        <h1>
          And I&apos;m passionate about
          {' '}
          <u className={styles.code}>coding</u>
          {', '}
          <u className={styles.science}>data science</u>
          {' & '}
          <u className={styles.design}>visual design</u>
          !
        </h1>
      </div>
    </div>
  </div>
);

export default Hero;
