import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer.js';
import styled from 'styled-components';
import Nav from './Nav';
import { ThemeProvider } from './ThemeContext';
import '@fontsource/roboto';
const LayoutStyles = styled.div`
    transition: all var(--transition-duration) ease-in-out;
    .site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        }
    .site-content {
        flex-grow: 1;
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
                    <Footer />
                </div>
            </LayoutStyles>
        </ThemeProvider>
    )
}