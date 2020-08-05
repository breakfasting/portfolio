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
        <h1>
          Check out my
          {' '}
          <u className={styles.resume}>resume</u>
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
