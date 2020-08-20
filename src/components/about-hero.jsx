import React from 'react';
import Portrait from './portrait';
import styles from './about-hero.module.scss';

const AboutHero = () => (
  <div className={styles.aboutHero}>
    <div className={styles.contentWrap}>
      <div className={styles.portrait}>
        <Portrait />
      </div>
      <div className={styles.intro}>
        <h1>Hi! I&apos;m Wayne,</h1>
        <p>
          As a GIS researcher-turned-software engineer with a big affinity for innovative concepts amongst their real-world applications,
          I strive to craft fully fledged projects that are user-experience-driven, practical and optimized, whilst also responsive and elegant in design.
        </p>
        <p>
          I started my engineering journey in high school while working as an independent contract web developer for friends, school administrations, and academic related associations.
          And it was not long until data scraping with R, learning graph traversing algorithms, and building a travel recommender app for my master thesis has won my heart over to programming.
          Which after taking a product management internship at a GIS software provider company, the exposure to the work culture as well as working closely in a team with engineers solidified my goal to become a software engineer.
        </p>
        <p>
          The industry has many different perspectives to offer and it continues to inspire me to push my boundaries as a programmer, designer, and problem solver.
        </p>
        <p>
          In my spare time, I’m also an adventurous home cook, while actively biking around the city and clicking photos.
        </p>
      </div>

    </div>
  </div>
);

export default AboutHero;
