import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SkillIcon from './skill-icon';
import styles from './skills.module.scss';

const Skills = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "skills"}}, sort: {fields: changeTime, order: ASC}) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
      }
    `,
  );

  return (
    <div className={styles.skills}>
      <div className={styles.contentWrap}>
        <div className={styles.heading}>
          <h1>Skills</h1>
          <h2>Technologies I&apos;ve worked with.</h2>
        </div>
        <div className={styles.icons}>
          {data.allFile.edges.map(({ node: { id, publicURL, name } }) => (
            <SkillIcon
              key={id}
              src={publicURL}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
