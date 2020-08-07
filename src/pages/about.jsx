import React from 'react';
import AboutHero from '../components/about-hero';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = (props) => (
  <Layout>
    {/* {console.log(props)} */}
    <SEO title="About" />
    <AboutHero />
  </Layout>
);

export default About;
