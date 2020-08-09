import React, { useState, useRef, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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

  const [tags, setTags] = useState([{ name: 'Featured', id: 999 }]);
  const [height, setHeight] = useState(null);
  const [suggestions, setSuggestions] = useState(tagsWithId);

  const reactTags = useRef(null);
  const flip = useRef(null);

  const onDelete = (i) => {
    const newTags = tags.slice(0);
    newTags.splice(i, 1);
    setTags(newTags);
  };

  const onAddition = (tag) => {
    const newTags = [].concat(tags, tag);
    setTags(newTags);
  };

  const onValidate = (tag) => {
    if (tags.some((currentTag) => currentTag.name === tag.name)) {
      reactTags.current.clearInput();
      return false;
    }
    return true;
  };

  const findTagAndSet = (input) => {
    const newTags = tagsWithId.filter((tag) => tag.name === input);
    setTags(newTags);
  };

  const findTagAndAdd = (input) => {
    const newTag = tagsWithId.find((tag) => tag.name === input);
    if (newTag) reactTags.current.addTag(newTag);
  };

  const resizeContainer = () => {
    setHeight(flip.current.getBoundingClientRect().height);
  };

  // useEffect(() => {
  //   console.log(reactTags);
  // }, []);

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
                    ...GatsbyImageSharpFluid_tracedSVG
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
    <div id="projects" className={styles.projects}>
      <div className={styles.contentWrap}>
        <div className={styles.topBar}>
          <h1 className={styles.heading}>Projects</h1>
          <Link
            to="/project-ndg/"
            state={{
              modal: true,
            }}
          >
            Login
          </Link>
          <div className={styles.nav}>
            <div className={styles.quickMenu}>
              <span onClick={() => findTagAndSet('Featured')}>Featured</span>
              <span onClick={() => setTags([])}>All</span>
              <span onClick={() => findTagAndSet('Work')}>Work</span>
              <span onClick={() => findTagAndSet('Personal')}>Personal</span>
            </div>
            <div className={styles.tagInput}>
              <FiFilter />
              <ReactTags
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                onValidate={onValidate}
                placeholderText="Filter by Tags"
                minQueryLength={1}
              />
            </div>
          </div>
        </div>
        <div className={styles.listContainer} style={{ height: `${height}px` }}>
          <ul className={styles.list} ref={flip}>
            <FlipMove
              onStartAll={resizeContainer}
            >
              {filteredProjects.map((project) => (
                <li key={project.node.id} className={styles.card}>
                  <Card project={project.node} findTagAndAdd={findTagAndAdd} />
                </li>
              ))}
            </FlipMove>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
