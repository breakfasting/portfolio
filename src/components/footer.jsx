import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaAngellist, FaInstagram, FaEnvelope,
} from 'react-icons/fa';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.contentWrap}>
      <div className={styles.contact}>
        <div className={styles.location}>
          Based in San Francisco, CA
        </div>
        <h1 className={styles.checkout}>
          Check out my
          {' '}
          <a href="https://drive.google.com/file/d/1wY7SMfveYZZF8M1-EvzypV1CUOpAC4ac/view?usp=sharing" target="_blank" rel="noreferrer">
            <span className={styles.resume}>resume</span>
          </a>
          {', '}
          <span>
            Get in touch!
          </span>
        </h1>
        <div className={styles.social}>
          <a href="mailto:waynesu.an@gmail.com">
            <i className={styles.email}>
              <FaEnvelope />
            </i>
          </a>
          <a href="https://www.linkedin.com/in/waynesu-an/" target="_blank" rel="noreferrer">
            <i className={styles.linkedin}>
              <FaLinkedinIn />
            </i>
          </a>
          <a href="https://github.com/breakfasting" target="_blank" rel="noreferrer">
            <i className={styles.github}>
              <FaGithub />
            </i>
          </a>
          <a href="https://angel.co/u/wayne-su-1" target="_blank" rel="noreferrer">
            <i className={styles.angellist}>
              <FaAngellist />
            </i>
          </a>
          {/* <a href="https://www.instagram.com/_waynesu_/" target="_blank" rel="noreferrer">
            <i className={styles.instagram}>
              <FaInstagram />
            </i>
          </a> */}
        </div>
      </div>
      <div className={styles.copyright}>
        ©
        {' '}
        {new Date().getFullYear()}
        {', '}
        <span>
          Designed and coded by
          {' '}
          <AnchorLink to="/about" title="About me">
            Wayne Su
          </AnchorLink>
        </span>
      </div>

    </div>
  </div>
);

export default Footer;
