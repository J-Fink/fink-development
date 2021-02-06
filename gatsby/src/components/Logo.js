import React from 'react';
import styled from 'styled-components';
import logoLight from '../assets/images/logoLight.svg';

const LogoStyles = styled.div`
    background: url(${logoLight});
    background-repeat: no-repeat;
    padding-top: 31.25%;
    height: 75px;
    width: 160px;
    margin-right: 3vw;
    margin-top: 5px;

`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
            <div></div>
        </LogoStyles>
    )
}