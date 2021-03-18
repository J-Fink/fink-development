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
// const MenuStyles = styled.nav`
//     top: var(--header-height);
//     display: flex;
//     justify-content: center;
//     width: 100vw;
//     padding: 0;
//     z-index: 1;
//     font-family: 'Open Sans', sans-serif;
//     text-transform: uppercase;
//     @media (max-width: 770px) {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         height: var(--line-height);
//     }
//  .dropdown-content a {
//         width: 100%;
//         height: 100%;
//         display: inline-block;
//         height: var(--line-height);
//         text-align: center;
//         text-decoration: none;
//         color: white;
//         cursor: pointer; 
//     }
//      .dropdown-content:hover {
//         color: purple;
//         background-color: var(--nav-hover-color);
//         cursor: pointer;
//     } 
//     ul {
//         display: flex;
//         justify-content: center;
//         list-style-type: none;
//         margin: 0;
//         padding: 0;
//     }
//     li {
//         list-style-type: none;
//         text-decoration: none; 
//         justify-content: space-around;
//         height: var(--header-height);
//         line-height: var(--line-height);
//         padding: 0px 16px;
//         transition: all 0.25s ease-in-out;
//     }
// `;
const NavStyles = styled.header`
    --line-height: 6.5vh;
    width: 100vw;
    height: var(--header-height);
    display: flex;
    background-color: var(--blue);
    position: fixed;
    justify-content: space-between;
    text-transform: uppercase;
    /* border-bottom: 2px solid red; */
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
    /* .hidden {
        background-color: var(--nav-hover-color);
        width: 0;
        height: 100vh;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 0;
        z-index: 1;
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
        visibility: hidden;
        position: absolute;
    } */
    /* .flex-container {
        display: flex;
        width: 100vw;
        flex-direction: row;
        justify-content: space-between;
    } */
    /* .logo {
        height: var(--header-height);
        margin-top: 5px;
        margin-right: 0;
    }
    .logo-container {
        margin-right: 6vw;
    } */
    /* .hidden .dropdown-content {
        width: 0;
        visibility: hidden;
    }
    .animated.dropdown-content {
        width: 100vw;
        visibility: visible;
    }
    .shake {
        transform: rotate(-5deg);
    }
    .dropdown-content {
        width: 100vw;
        transition: all 0.5s ease-in-out;
    }
    .dropdown-content:hover {
        text-align: center;
        color: white;
        background-color: var(--nav-hover-color);
        width: 100vw;
    }
    .bar-container {
        display: block;
        width: 30px;
        height: 18px;
        margin-top: 17px;
        margin-bottom: 17px;
        margin-left: 6vw;
        background: none;
        cursor: pointer;
    }
    .bar-container div {
        display: block;
    }
    .bar-1, .bar-2, .bar-3 {
        display: block;
        width: 30px; 
        height: 4px; 
        border-radius: 10px;
        background: black;
        margin: 2px 0;
        transition: all 0.5s;
    }
    .bar-2 {
        margin-top: 3px;
        margin-bottom: 3px;
    }
    .change .bar-1 {
        transform: rotate(-45deg) translate(-6.75px, 6.7px)
        
    }
    .change .bar-2 {
        background-color:aqua;
        transform: translateY(-500px);
    }
    .change .bar-3 {
        transform: rotate(45deg) translate(-2.75px, -3px);
    }
    .expand {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        visibility: visible;   }
    } */
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
            {/* // ) : (
            //     <Navbox open>
            //         <NavbarLinks onClick={() => setNavOpen(!navOpen)}/>
            //     </Navbox>
            // )} */}

            {/* <ul className="menu-container">
                <div className="flex-container">
                <div className="bar-container">
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
                </div>
                <MenuStyles id="menu" className="dropdown-menu">
                <Toggle className="dropdown-content" />
                <li className="dropdown-content">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="dropdown-content">
                            <Link to="/education">Education</Link>
                        </li>
                        <li className="dropdown-content">
                            <Link to="/technologies">Technologies</Link>
                        </li>
                        <li className="dropdown-content">
                        <Link to="/uses">Uses</Link>
                        </li>
                        <li className="dropdown-content">
                            <Link to="/work">Work</Link>
                            </li>
                    </MenuStyles>
                </div>
            </ul> */}
        </NavStyles>
    )
}

