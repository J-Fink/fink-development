import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
const TechnologiesGrid = styled.div`
    display: grid;
    grid-gap: 2rem;
    /* g */
`;
const TechnologyStyles = styled.div`
    .gatsby-image-wrapper {
        /* height: 125px; */
        width: 75px;
    }
`;


export default function TechnologiesPage({ data }) {
    
    console.log(data);
    const technologies = data.allSanityTechnology.nodes;
    console.log(technologies);
    return (
        <>
            <BasicPageStyles>
                
            <TechnologiesGrid>
                {technologies.map((technology) => (
                    <TechnologyStyles key={technology.id}>{technology.name}
                        <Img fluid={technology.image.asset.fluid} />
                    </TechnologyStyles>
                ))}
            </TechnologiesGrid>
            </BasicPageStyles>
        </>  
    )
}

export const query = graphql`
    query {
        allSanityTechnology {
    nodes {
      name
      image {
        asset {
          fluid(maxWidth: 410) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
    }
`;