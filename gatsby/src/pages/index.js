import React from 'react';
import SEO from '../components/SEO.js';
// import Layout from '../components/Layout';
import styled from 'styled-components';
import Hero from '../components/Hero';
const IndexStyles = styled.div`
  .site {
    background: var(--heroBackground);
  }
`;
export default function HomePage() {
  
  return (
    <IndexStyles>
    <SEO title="Joe" />
      <Hero />
    </IndexStyles>
  )
}
