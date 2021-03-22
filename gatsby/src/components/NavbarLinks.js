import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
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
    background: var(--success-green);
    height: 1px;
  }
:hover {
    color: var(--success-green);
}
&[aria-current] {
    color: var(--success-green);
    ::after{
        width: 100%;
    }
}    
    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: var(--nav-font-size);
        z-index: 6;
    }
`;
export default function NavbarLinks({ menuState, setMenuState}) {
    let navLinks = [
        {path:'/about',title:'About'},
        {path:'/education',title:'Education'},
        {path:'/technologies',title:'Technologies'},
        {path:'/uses',title:'Uses'},
        {path:'/work',title:'Work'},
        {path:'/blog',title:'Blog'},
    ]
    const closeMenu = () => {
        setMenuState(!menuState);
    };
    return (
        <>
        {navLinks.map((link, index) => {
            return(
                <NavItem onClick={() => closeMenu()} key={index} to={link.path}>{link.title}</NavItem>
            )
        })}
        </>

    );
};