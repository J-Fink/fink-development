import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const NavItem = styled(Link)`
    text-decoration: none;
    color: var(--navTextColor);
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
    background: var(--navTextHoverColor);
    height: 1px;
    transition: all 0.25s ease-in-out;
  }
:hover,:focus {
    color: var(--navTextHoverColor);
    ::after {
        width: var(--navUnderlineWidth);
    }
}
&[aria-current] {
    color: var(--navTextHoverColor);
    ::after{
        width: 100%;
    }
}    
    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: var(--navFontSize);
        z-index: 6;
    }
`;
const NavContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    align-items: center;
`;
const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
    flex-direction: column;

    }
`;
export default function NavbarLinks({ menuState, setMenuState}) {
    let navLinks = [
        {path:'/about',title:'About'},
        // {path:'/education',title:'Education'},
        // {path:'/technologies',title:'Technologies'},
        // {path:'/uses',title:'Uses'},
        // {path:'/work',title:'Work'},
        {path:'/contact',title:'Contact'},
        {path:'/blog',title:'Blog'},
        {path:'/projects',title:'Projects'},
    ]

    return (
        <NavContainer>
            <MenuContainer>
                {navLinks.map((link, index) => {
                    return(
                        <NavItem onClick={() => menuState ? setMenuState(!menuState) : ''} key={index} to={link.path}>{link.title}</NavItem>
                    )
                })}
            </MenuContainer>
        </NavContainer>

    );
};