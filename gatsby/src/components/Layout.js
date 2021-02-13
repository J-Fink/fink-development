import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
// import styled from 'styled-components';
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            {/* <Nav /> */}
            {children}
            <Footer />
        </>
    )
}