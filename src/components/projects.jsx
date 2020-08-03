import React from 'react';
import { SpringGrid, measureItems, makeResponsive } from 'react-stonecutter';
import styles from './projects.module.scss';

const Grid = makeResponsive(measureItems(SpringGrid), {
  maxWidth: 960,
  minPadding: 100,
});

const Projects = () => (
  <div className={styles.projects}>
    <div className={styles.contentWrap}>
      <Grid
        component="ul"
        columnWidth={450}
        gutterWidth={5}
        gutterHeight={5}
        itemHeight={200}
        springConfig={{ stiffness: 170, damping: 26 }}
      >
        <li key="A" className={styles.test}>A</li>
        <li key="B">B</li>
        <li key="C">C</li>
      </Grid>

    </div>
  </div>
);

export default Projects;
