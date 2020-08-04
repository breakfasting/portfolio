import React, { useState, useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FlipMove from 'react-flip-move';
import { FiFilter } from 'react-icons/fi';
import ReactTags from 'react-tag-autocomplete';
import { useGroupTags } from '../hooks/use-group-tags';
import styles from './projects.module.scss';
import './react-tags.scss';
import Card from './card';

const Projects = () => {
  const { group } = useGroupTags();
  const tagsWithId = group.map((tag, index) => ({ ...tag, id: index }));

  const [tags, setTags] = useState([]);
  const [suggestions, setSuggestions] = useState(tagsWithId);
  const reactTags = useRef();

  const onDelete = (i) => {
    const newTags = tags.slice(0);
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const onAddition = (tag) => {
    const newTags = [].concat(tags, tag);
    setTags(newTags);
  };

  const findTagAndSet = (input) => {
    const newTags = tagsWithId.filter((tag) => tag.name === input);
    setTags(newTags);
  };

  useEffect(() => {
    findTagAndSet('Featured');
  }, []);

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

  const filteredProjects = projects.filter((project) => (
    tags.every((tag) => (
      project.node.frontmatter.tags.some((projTag) => projTag.name === tag.name)))
  ));

  return (
    <div className={styles.projects}>
      <div className={styles.contentWrap}>
        <div className={styles.topBar}>
          <h1 className={styles.heading}>Projects</h1>
          <div className={styles.nav}>
            <div className={styles.quickMenu}>
              <span className={styles.active}>Featured</span>
              <span>All</span>
              <span>Work</span>
              <span>Personal</span>
            </div>
            <div className={styles.tagInput}>
              <FiFilter />
              <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                placeholderText="Filter by Tags"
                minQueryLength={1}
              />
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          <FlipMove
            enterAnimation="fade"
            leaveAnimation="fade"
          >
            {filteredProjects.map((project) => (
              <li key={project.node.id} className={styles.card}>
                <Card project={project.node} />
              </li>
            ))}
          </FlipMove>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
