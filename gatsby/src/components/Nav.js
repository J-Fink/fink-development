import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'gatsby';


const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    /* padding: 0 10vw; */
    margin-right: 20px;
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
  :hover {
    color: var(--success-green);
}
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    overflow-y: hidden;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    /* padding-top: 10vh; */
    background-color: grey; /*var(--nav-hover-color);*/ 
    transition: all var(--transition-duration) ease-in-out;
    
    top: var(--header-height);
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const NavStyles = styled.header`
    --line-height: 6.5vh;
    width: 100%;
    height: 64px; /*var(--header-height);*/
    display: flex;
    background-color: var(--blue);
    position: fixed;
    justify-content: space-between;
    text-transform: uppercase;
    
    margin: 0 auto;
    z-index: 2;
    align-self: center;
    
    @media (max-width: 770px) {
        touch-action: none;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
    }`;
// function themeSelectorToggle() {
//   console.log(`it's working`)
// }


export default function Nav() {
  const [menuState, setMenuState] = useState(false);
  
    return (
        <NavStyles >
            <Link to="/" onClick={() => setMenuState(!menuState)}>
                <Logo />
            </Link>
           
            <Toggle onClick={() => setMenuState(!menuState)}>
                {/* below shows the hamburger bun or not */}
                {menuState ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {menuState ? (
                <Navbox>
                    <NavbarLinks menuState={menuState} setMenuState={setMenuState} />
                </Navbox>
            ) : (
                <Navbox open  >
                    <NavbarLinks menuState={menuState} setMenuState={setMenuState}/>
                </Navbox>
            )}
        </NavStyles>
    )
}

