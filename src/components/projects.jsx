import React from 'react';
import ntuac from '../images/project-ntuac.jpg';
import styles from './projects.module.scss';

const Projects = () => (
  <div className={styles.projects}>
    <div className={styles.contentWrap}>
      <div className={styles.card}>
        <img src={ntuac} alt="" />
        <div className={styles.info}>
          <div className={styles.cardTitle}>
            <h1>Activity Calendar</h1>
          </div>
          <div className={styles.cardDesc}>
            Managing upcoming events for NTU Global Lounge
          </div>
          <div className={styles.tags}>
            <span className={styles.orange}>UI/UX</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src={ntuac} alt="" />
        <div className={styles.info}>
          <div className={styles.cardTitle}>
            <h1>Activity Calendar</h1>
          </div>
          <div className={styles.cardDesc}>
            Managing upcoming events for NTU Global Lounge
          </div>
          <div className={styles.tags}>
            <span className={styles.orange}>UI/UX</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src={ntuac} alt="" />
        <div className={styles.info}>
          <div className={styles.cardTitle}>
            <h1>Activity Calendar</h1>
          </div>
          <div className={styles.cardDesc}>
            Managing upcoming events for NTU Global Lounge
          </div>
          <div className={styles.tags}>
            <span className={styles.orange}>UI/UX</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <img src={ntuac} alt="" />
        <div className={styles.info}>
          <div className={styles.cardTitle}>
            <h1>Activity Calendar</h1>
          </div>
          <div className={styles.cardDesc}>
            Managing upcoming events for NTU Global Lounge
          </div>
          <div className={styles.tags}>
            <span className={styles.orange}>UI/UX</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
