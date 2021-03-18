import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
        text-align: center;
        bottom: 0;
        position: relative;
    `;
export default function Footer() {
    return (
    <FooterStyles>
                &copy; Joe Fink {new Date().getFullYear()}
    </FooterStyles>
    )
}