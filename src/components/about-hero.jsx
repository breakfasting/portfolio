import React from 'react';
import styles from './about-hero.module.scss';

const AboutHero = () => (
  <div className={styles.hero}>
    <div className={styles.contentWrap}>
      <div className={styles.heroText}>
        <h1>&gt;_Hi! I&apos;m Wayne Su,</h1>
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
    </div>
  </div>
);

export default AboutHero;
