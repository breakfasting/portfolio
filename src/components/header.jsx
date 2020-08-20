import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FiArrowDownCircle } from 'react-icons/fi';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import logo from '../images/logo.png';
import styles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "resume.pdf"}) {
        publicURL
      }
    }
  `);
  // <a href={data.file.publicURL} download>Download {data.file.name}</a>
  return (
    <header className={styles.header}>
      <div className={styles.contentWrap}>
        <AnchorLink to="/" title="Home">
          <img src={logo} alt="" className={styles.logo} />
        </AnchorLink>
        <div className={styles.rightNav}>
          <a href={data.file.publicURL} download>
            <div className={styles.resume}>
              <FiArrowDownCircle />
              <span className={styles.resumeText}>
                Resume
              </span>
            </div>
          </a>
          <AnchorLink to="/#projects" title="My Projects" stripHash>
            <span>
              Projects
            </span>
          </AnchorLink>
          <AnchorLink to="/about" title="About me">
            <span>
              About
            </span>
          </AnchorLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
