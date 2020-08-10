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
      <Img fluid={featuredImage.childImageSharp.fluid} />
    </Link>
    <div className={styles.info}>
      <div>
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
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={`${title}-${tag.name}`} className={styles[tag.type]} onClick={() => findTagAndAdd(tag.name)}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  </>
);

export default Card;
