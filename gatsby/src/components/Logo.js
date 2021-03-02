import React from 'react';
import styled from 'styled-components';
import logoLight from '../assets/images/logo-light.svg';
import logoHover from '../assets/images/logo-hover.svg';


const LogoStyles = styled.div`
    background: url(${logoLight});
    background-repeat: no-repeat;
    padding-top: 31.25%;
    height: 0px;
    width: 160px;
    margin-right: 3vw;
    margin-top: 5px;
    transition: all 0.25s ease-in-out;
    :hover {
        height: 0px;
        background: url(${logoHover});
        background-repeat: no-repeat;
        /* background-color: var(--nav-hover-color); */
    }


`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
        </LogoStyles>
    )
}