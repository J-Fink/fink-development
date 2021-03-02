import React from 'react';
import styled from 'styled-components';
import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';

const LogoStyles = styled.div`
    background: url(${logoLight});
    background-repeat: no-repeat;
    padding-top: 31.25%;
    height: 0px;
    width: 160px;
    margin-right: 3vw;
    margin-top: 5px;
    :hover {
        height: 0px;
        background-color: orange;
    }
    .logo {
        height: 0px;
        background-color: white;
    }
    .logo {
        height: var(--header-height);
        margin-right: 3vw;
        margin-top: 5px;
    }

`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
        </LogoStyles>
    )
}