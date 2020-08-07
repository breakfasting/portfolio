import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      portrait: file(relativePath: { eq: "headshot_1024.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img fluid={data.portrait.childImageSharp.fluid} />
  );
};

export default Portrait;
