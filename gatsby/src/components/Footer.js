import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
    height: 100vh;
    footer {
        position: relative;
        bottom: 0;
    }
    `;
export default function Footer() {
    return (
    <FooterStyles>
        <footer>
            <p>
                &copy; Joe Fink {new Date().getFullYear()}
            </p>
        </footer>
    </FooterStyles>
    )
}