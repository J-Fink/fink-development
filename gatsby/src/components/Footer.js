import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    footer {
        position: relative;
        bottom: 0;
    }
    `;
export default function Footer() {
    return (
    <FooterStyles>
                &copy; Joe Fink {new Date().getFullYear()}
    </FooterStyles>
    )
}