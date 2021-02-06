import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Hero from '../components/Hero';

const HomePage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Hero></Hero>
      {/* <Img
      className="backgroundWorking"
      fixed={data.file.childImageSharp.fixed}
      alt=""
      /> */}
      <h1>Think Fink For Web Development</h1>
    </Layout>
  )
}

export const query = graphql`
query {
  file(relativePath: { eq: "background-working.JPG"}) {
    childImageSharp {
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;
export default HomePage;