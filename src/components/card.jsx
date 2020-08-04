import React from 'react';
import Img from 'gatsby-image';
import styles from './card.module.scss';

const Card = ({
  project: {
    frontmatter: {
      featuredImage, title, description, tags, date,
    },
  },
}) => (
  <>
    <Img fluid={featuredImage.childImageSharp.fluid} />
    <div className={styles.info}>
      <div>
        <div className={styles.cardTitle}>
          <h1>{title}</h1>
        </div>
        <div className={styles.cardDesc}>
          {description}
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={`${title}-${tag.name}`} className={styles[tag.type]}>{tag.name}</span>
        ))}
      </div>
    </div>
  </>
);

export default Card;
