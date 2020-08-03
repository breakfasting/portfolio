import React from 'react';
import Img from 'gatsby-image';
import styles from './card.module.scss';

const Card = ({
  project: {
    frontmatter: {
      featuredImage, title, description, tags, date,
    }
  },
}) => (
  <>
    <Img fluid={featuredImage.childImageSharp.fluid} />
    <div className={styles.info}>
      <div className={styles.cardTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.cardDesc}>
        {description}
      </div>
      <div className={styles.tags}>
        <span className={styles.orange}>UI/UX</span>
        <span>JavaScript</span>
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>
  </>
);

export default Card;
