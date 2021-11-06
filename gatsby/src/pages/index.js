import React from 'react';
import SEO from '../components/SEO.js';
// import Layout from '../components/Layout';
import styled from 'styled-components';
import Hero from '../components/Hero';
import AboutPage from './about.js';
import Welcome from '../components/Welcome.js';
const IndexStyles = styled.div`
  .site {
    background: var(--heroBackground);
  }
`;
export default function HomePage() {
  
  return (
    <IndexStyles>
    <SEO title="Joe" />
      {/* <Hero /> */}
      {/* <AboutPage /> */}
      <Welcome />
    </IndexStyles>
  )
}
