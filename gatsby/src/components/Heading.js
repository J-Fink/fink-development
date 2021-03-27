import React from 'react';
import styled from 'styled-components';


export const HeadingStyles = styled.h1`
      position: relative;
      top: -445px;
      font-size: 9rem;
    `;
    
export default function Heading({ title }) {
 
    return (
        <HeadingStyles>
            { title }
        </HeadingStyles>
    )
}