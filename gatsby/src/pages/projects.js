import React from 'react';
import SEO from '../components/SEO.js';
import Projects from '../components/Projects.js';
import BasicPageStyles from '../styles/BasicPageStyles';
import styled from 'styled-components';

const ProjectsPageStyles = styled.div`
    text-align: center;
    h2 {
        text-decoration: underline;
        text-transform: uppercase;
        margin-top: 20vh;
        margin-bottom: 1vh;
        font-size: 1.5rem;
    }
`;



export default function ProjectsPage() { 
    
    return (
        <BasicPageStyles>
            <SEO />
            <h2>Things I've Built</h2>
            <Projects />
        </BasicPageStyles>
    )
}