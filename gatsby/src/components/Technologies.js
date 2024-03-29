import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const TechContainer = styled.div`
    display: grid;
    text-align: center;
    grid-template-columns: var(--TechContainerColumns);
    max-width: 800px;
    grid-gap: var(--TechContainerGridGap);
    margin: auto;
`;

const TechItem = styled.div`
/* display: grid;   */

`;

export default function Technologies() {
    let technologiesArray = [
        {name:'Notion'},
        {name:'Git'},
        {name:'GitHub'},
        {name:'VS Code'},
        {name:'React'},
        {name:'CSS'},
        {name:'ES6+'},
        {name:'JS'},
        {name:'HTML'},
        {name:'MongoDB'},
        {name:'Gatsby'},
        {name:'GraphQL'},
        {name:'CSS Flexbox'},
        {name:'CSS Grid'},
        {name:'Styled-Components'},
        {name:'Nextjs'},
    ]

    return (
        <TechContainer>
            
                {technologiesArray.map((tech) => {
                    return(
                        <TechItem>{tech.name}</TechItem>
                    )
                })}
            
        </TechContainer>

    );
};