import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'gatsby';
// import Toggle from './Toggle';

const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    /* padding: 0 10vw; */
    margin-right: 2vw;
    transition: all var(--transition-duration) ease-in-out;
    @media (max-width: 768px) {
        display: flex;
    }
`;
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  /* transition: all 1.75s ease-in-out; */
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
const Navbox = styled.div`
    margin-right: 2vw;
    font-size: var(--nav-font-size);
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    transition: all var(--transition-duration) ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: var(--nav-hover-color);
    transition: all var(--transition-duration) ease-in-out;
    
    top: var(--header-height);
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const NavStyles = styled.header`
    --line-height: 6.5vh;
    width: 100vw;
    height: var(--header-height);
    display: flex;
    background-color: var(--blue);
    position: fixed;
    justify-content: space-between;
    text-transform: uppercase;
    
    margin: 0 auto;
    z-index: 2;
    align-self: center;
    transition: all var(--transition-duration) ease-in-out;
    /* transition: all 0.25s ease-in-out; */
    
  
    @media (max-width: 770px) {
        touch-action: none;
        transition: all var(--transition-duration) ease-in-out;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }`;

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    console.log(setNavOpen.useState);
    return (
        <NavStyles >
            <Link to="/">
                <Logo />
            </Link>
            {/* <Toggle /> */}
            <Toggle navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
                {/* below shows the hamburger bun or not */}
                {navOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navOpen ? (
                <Navbox navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </NavStyles>
    )
}

