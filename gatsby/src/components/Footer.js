import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';

const FooterStyles = styled.footer`
        text-align: center;
        bottom: 0;
        position: relative;
        background-color: var(--footer-color);
        font-size: 1.65rem;
        color: white;
        height: var(--footer-height);
    `;
export default function Footer() {
    const [themeSelectorState, setThemeSelectorState] = useState(false);
    return (
    <FooterStyles>
        <div>&copy; Joe Fink {new Date().getFullYear()}</div>
        <ThemeSelector themeSelectorState={themeSelectorState} setThemeSelectorState={setThemeSelectorState} />
    </FooterStyles>
    )
}