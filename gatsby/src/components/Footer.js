import React, { useState } from 'react';
import styled from 'styled-components';
import ThemeSelector from './ThemeSelector';
import SocialLinks from './SocialLinks';
const FooterStyles = styled.footer`
        text-align: center;
        /* position: absolute; */
        /* bottom: 0; */
        box-shadow: 0 3px 19px -4px black;
        width: 100%;
        background-color: var(--footerColor);
        font-size: 1.65rem;
        color: white;
        height: var(--footerHeight);
        z-index: 4;
    `;
export default function Footer() {
    const [themeSelectorState, setThemeSelectorState] = useState(false);
    return (
    <FooterStyles>
        <div>&copy; Joe Fink 2019-{new Date().getFullYear()}</div>
        <ThemeSelector themeSelectorState={themeSelectorState} setThemeSelectorState={setThemeSelectorState} />
        <SocialLinks />
    </FooterStyles>
    )
}