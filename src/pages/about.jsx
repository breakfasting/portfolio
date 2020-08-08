import React from 'react';
import AboutHero from '../components/about-hero';
import Skills from '../components/skills';
import Layout from '../components/layout';
import SEO from '../components/seo';

const About = (props) => (
  <Layout>
    {/* {console.log(props)} */}
    <SEO title="About" />
    <AboutHero />
    <Skills />
  </Layout>
);

export default About;
