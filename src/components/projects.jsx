import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './projects.module.scss';
import Card from './card';

// const mockProjects = [
//   {
//     title: 'Activity Calendar',
//     desc: 'Managing upcoming events for NTU Global Lounge',
//     img: ntuac,
//     tagsCode: [],
//     tagsDesign: [],
//     tagsScience: [],
//   },
// ];

const Projects = () => {
  const { allMarkdownRemark: { edges: projects } } = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            description
            title
            tags {
              name
              type
            }
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  }
`);
  return (
    <div className={styles.projects}>
      <div className={styles.contentWrap}>
        <div className={styles.topBar}>
          <h1 className={styles.heading}>Projects</h1>
          <div className={styles.nav}>
            <span className={styles.active}>Featured</span>
            <span>All</span>
            <span>Work</span>
            <span>Personal</span>
          </div>
        </div>
        <ul className={styles.list}>
          {projects.map((project) => (
            <li key={project.node.id} className={styles.card}>
              <Card project={project.node} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
