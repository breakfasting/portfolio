import React from 'react';
import {
  FaGithub, FaLinkedinIn, FaAngellist, FaInstagram, FaEnvelope,
} from 'react-icons/fa';
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
          , Get in touch!
        </h1>
        <div className={styles.social}>
          <i className={styles.email}>
            <FaEnvelope />
          </i>
          <i className={styles.linkedin}>
            <FaLinkedinIn />
          </i>
          <i className={styles.github}>
            <FaGithub />
          </i>
          <i className={styles.angellist}>
            <FaAngellist />
          </i>
          <i className={styles.instagram}>
            <FaInstagram />
          </i>
        </div>
      </div>
      <div className={styles.copyright}>
        ©
        {' '}
        {new Date().getFullYear()}
        , Designed and coded by Wayne Su
      </div>

    </div>
  </div>
);

export default Footer;
