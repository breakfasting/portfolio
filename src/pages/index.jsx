import React from 'react';
import { Link } from 'gatsby';
import styles from './index.module.scss';

// import Layout from '../components/layout';
// import Image from '../components/image';
// import SEO from '../components/seo';

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

const IndexPage = () => (
  <div className={styles.main}>
    <header>
      
    </header>
    <div className={styles.hero}>
      Hi, My name is Wayne Su
    </div>
    <div className={styles.projects}>
      projects
    </div>
    <footer>
      contact me
    </footer>
  </div>
);

export default IndexPage;
