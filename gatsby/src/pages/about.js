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
                    I'm a husband and father, and I'm a self-taught web developer.<br />
                    I also like keeping an open mind while I find a solution to a problem.
                </AboutStyles>
            </BasicPageStyles>
        </>
    )
}