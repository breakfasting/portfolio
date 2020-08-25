import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from './card.module.scss';

const Card = ({
  findTagAndAdd,
  project: {
    fields: {
      slug,
    },
    frontmatter: {
      featuredImage, title, description, tags, date,
    },
  },
}) => (
  <>
    <Link
      to={slug}
      state={{
        modal: true,
      }}
    >
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </div>
      </div>
    </Link>
    <div className={styles.info}>
      <div className={styles.descInfo}>
        <div className={styles.cardTitle}>
          <Link
            to={slug}
            state={{
              modal: true,
            }}
          >
            <h1>{title}</h1>
          </Link>
        </div>
        <div className={styles.cardDesc}>
          {description}
        </div>
      </div>
      <div className={styles.tagsInfo}>
        <div className={styles.tagsTip}>
          Click to filter by tags
        </div>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={`${title}-${tag.name}`} className={styles[tag.type]} onClick={() => findTagAndAdd(tag.name)}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Card;
