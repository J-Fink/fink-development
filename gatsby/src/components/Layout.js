import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer.js';
import styled from 'styled-components';
import Nav from './Nav';
import { ThemeProvider } from './ThemeContext';
import '@fontsource/roboto';
const LayoutStyles = styled.div`
    transition: all var(--transition-duration) ease-in-out;
    /* width: 100vw; */
    .site {
        display: flex;
        position: relative;
        min-height: 100vh;
        flex-direction: column;
        min-height: -webkit-fill-available; // fixes issue with bottom footer being hidden on mobile
        }
    .site-content {
        flex-grow: 1;
        /* padding-bottom: var(--footerHeight); */
    }
`; 
export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <LayoutStyles>
                <div className="site">
                    <Nav />
                    {children}
                    <div className="site-content">
                    </div>
                </div>
                <Footer />
            </LayoutStyles>
        </ThemeProvider>
    )
}