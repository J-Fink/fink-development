import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import { Link } from 'gatsby';

const NavStyles = styled.header`
    --line-height: 6.5vh;
    
    --nav-color:/* #0B5351; */ rgba(11, 83, 81, 0.85);
    --nav-hover-color: /*#00A9A5;*/rgb(0, 169, 165, 0.85);
    height: var(--header-height);
    position: fixed;
    background-color: var(--blue);
    text-align: center;
    top: 0;
    margin: 0;
    padding: 0;
    width: 100vw;
    
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: var(--line-height);
        /* background-color: var(--nav-color); */
    }
    .flex-container {
        display: flex;
        width: 100vw;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
    .logo {
        height: var(--header-height);
        margin-right: 3vw;
        margin-top: 5px;
    }
    .logo-container {
        margin-right: 0;
    }
    .dropdown-menu {
        top: var(--header-height);
        display: flex;
        justify-content: center;
        width: 100vw;
        padding: 0;
        z-index: 1;
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
    }
    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        width: auto;
    }

    .dropdown-content {
        text-decoration: none; 
        justify-content: space-around;
        height: var(--header-height);
        line-height: var(--line-height);
        /* margin-left: 15px;
        margin-right: 15px; */
        padding: 0px 16px;
        
    }
    .dropdown-content a {
        width: 100%;
        height: 100%;
        display: inline-block;
        height: var(--line-height);
        text-align: center;
        text-decoration: none;
        color: white;
        cursor: pointer; 
        /* padding-left: 1vw;
        padding-right: 1vw; */
    }
    .dropdown-content:hover {
        /* color: purple; */
        background-color: #214661;
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    }
    /* .dropdown-content:hover {
        color: purple;
        background-color: var(--string);
        transition: all 0.25s ease-in-out;
        cursor: pointer;
    } */
    .test-background {
        background-image: url("./background-working.JPG");
        height: 1000px;
        width: 700px;
        z-index: 100;
        position: absolute;
    }


`;
// export default function backgroundCode() {
//     return (

//     )
// }
export default function Nav() {
    return (
        <NavStyles className="header">
        <ul className="menu-container">
            <div className="flex-container">
                <div className="bar-container">
                    <div className="bar-1"></div>
                    <div className="bar-2"></div>
                    <div className="bar-3"></div>
                </div>
                <div className="logo-container">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div id="menu" className="dropdown-menu">
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
                </div>
            </div>
        </ul>
        <div>
            
        </div>
        </NavStyles>
    )
}

