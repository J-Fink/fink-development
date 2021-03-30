import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const SocialLinksStyles = styled.div`   
    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        color: black;
    }
    @media (hover: none) {
        a:hover {
        background-color: white;
        }
    }
`;

export default function SocialLinks() {
    const size = '35px';
    return (
        <SocialLinksStyles>
            <a href="https://github.com/J-Fink" target="_blank" rel="noreferrer noopener">
                <GoMarkGithub size={size} />
            </a>
            <a href="https://www.linkedin.com/in/joe-fink" target="_blank" rel="noreferrer noopener">
                <IoLogoLinkedin size={size} />
            </a>
            <a href="https://twitter.com/joefink_dev" target="_blank" rel="noreferrer noopener">
                <IoLogoTwitter size={size} />
            </a>
        </SocialLinksStyles>

    );
};