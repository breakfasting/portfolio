import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ntuac from '../images/project-ntuac.jpg';
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
        }
      }
    }
  }
`);
  return (
    <div className={styles.projects}>
      <div className={styles.contentWrap}>
        {projects.map((project) => (
          <div className={styles.card}>
            <Card project={project.node} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
