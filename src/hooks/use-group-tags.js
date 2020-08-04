import { useStaticQuery, graphql } from 'gatsby';

export const useGroupTags = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          group(field: frontmatter___tags___name) {
            name: fieldValue
            totalCount
          }
        }
      }
    `,
  );
  return data.allMarkdownRemark;
};
