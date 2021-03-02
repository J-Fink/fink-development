import React from 'react';
import styled from 'styled-components';
import logoLight from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.svg';

const LogoStyles = styled.div`
    background: url(${logoLight});
    background-repeat: no-repeat;
    padding-top: 31.25%;
    height: 75px;
    width: 160px;
    margin-right: 3vw;
    margin-top: 5px;
    .logo:hover {
        background-color: purple;
        background: url(${logoDark});
    }

`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
            <div></div>
        </LogoStyles>
    )
}