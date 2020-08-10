import React from 'react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { graphql, Link } from 'gatsby';
import { FiX } from 'react-icons/fi';
import {
  FaGithub, FaGlobeAmericas,
} from 'react-icons/fa';
import Img from 'gatsby-image';
import styles from './project-modal.module.scss';
import Layout from '../components/layout';

// export default function BlogPost({ data }) {
//   const post = data.markdownRemark;
//   // highlight-end
//   return (
//     <Layout>
//       {/* highlight-start */}
//       <div>
//         <h1>{post.frontmatter.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//       </div>
//       {/* highlight-end */}
//     </Layout>
//   );
// }

const ConditionalLayout = ({ condition, children }) => (
  condition ? <Layout>{children}</Layout> : children
);

const ModalExamplePage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <ConditionalLayout condition={!modal}>
          <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.info}>
                <h1>{post.frontmatter.title}</h1>
                <span>{post.frontmatter.description}</span>
              </div>
              <div className={styles.close}>
                <Link to={closeTo} state={{ noScroll: true }}>
                  <FiX />
                </Link>
              </div>
            </div>
            <div className={styles.links}>
              <span>
                <FaGlobeAmericas />
                Live Site
              </span>
              <span>
                <FaGithub />
                GitHub
              </span>
            </div>
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
        </ConditionalLayout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
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
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ModalExamplePage;
