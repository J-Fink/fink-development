import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
`;

export default function Nav() {
    return (
        <div>
                   <ul class="menu-container">
            <div class="flex-container">
                <div class="bar-container">
                    <div class="bar-1"></div>
                    <div class="bar-2"></div>
                    <div class="bar-3"></div>
                </div>
                <div class="logo-container">
                    <a class="logo-link" href="https://www.joefink.dev/">
                        <img class="logo" src="images/think-fink-light.svg"/>
                    </a>
                </div>
                <div id="menu" class="dropdown-menu">
                    <li class="dropdown-content"><a class="learn-more-link" href="#learn-more">About</a></li>
                    <li class="dropdown-content"><a class="education-link" href="#education">Education</a></li>
                    <li class="dropdown-content"><a class="technology-link" href="#technology">Technologies</a></li>
                </div>
            </div>
        </ul> 
        </div>
    )
}

