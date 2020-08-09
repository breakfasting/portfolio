import React from 'react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { graphql, Link } from 'gatsby'; // highlight-line
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

const ModalExamplePage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ModalExamplePage;
