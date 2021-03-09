import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 0.25s ease-in-out;
    position: relative;
    /* background-color: purple; */
    :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    color: transparent;
    background: var(--attribute-name);
    height: 1px;
    transition: all 0.25s ease-in-out;
  }
    :hover {
        color: var(--attribute-name);
        ::after {
            width: 100%;
        }
    }
    
    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`;
export default function NavbarLinks() {
    return (
        <>
            
            <NavItem to="/about">About</NavItem>
            <NavItem to="/education">Education</NavItem>
            <NavItem to="/technologies">Technologies</NavItem>
            <NavItem to="/uses">Uses</NavItem>
            <NavItem to="/work">Work</NavItem>
        </>

    )
}