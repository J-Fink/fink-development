import React from 'react';
import BasicPageStyles from '../styles/BasicPageStyles';
import SEO from '../components/SEO.js';
import styled from 'styled-components';

const AboutStyles = styled.div`
    text-align: center;
    
`;
export default function AboutPage() { 
    return (
        <>
            <SEO />
            <BasicPageStyles>
                <AboutStyles>
                    Hello, my name is Joe!<br />
                    I'm a husband, father, and a self-taught web developer.<br />
                </AboutStyles>
            </BasicPageStyles>
        </>
    )
}