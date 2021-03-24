import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --blue: rgba(25, 53, 73, 1); //#193549; 
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orange-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign
    --header-height: 64px;
    --nav-color:/* #0B5351; */ rgba(25, 53, 73, 0.85);
    --nav-hover-color: /*#214661;*/rgba(33, 70, 97, 0.85);
    --transition-duration: 0.75s;
    --nav-font-size: 1.75rem;
    --success-green: #3ad900;
    --footer-color: var(--blue);
    --footer-height: 64px;
    --nav-box-background-color: grey;
    
    //Dev Theme
    --dev-theme-footer-color: rgba(25, 53, 73, 1);
    --dev-theme-nav-color: rgba(25, 53, 73, 0.85);
    --dev-theme-nav-hover-color: rgba(33, 70, 97, 0.85);
    --dev-theme-footer-height: 64px;
    --dev-theme-header-height: 64px;
    --dev-nav-box-background-color: rgba(33, 70, 97, 1); //possibly 0.85
    //Light Theme
    --light-theme-footer-color: white;
    overflow-x: hidden;
    }
    html {
        font-size: 10px;
        font-family: monospace;
    }
    body {
        margin: 0;
        background: var(--color-background);
        color: var(--color-text);
    }
`;
export default GlobalStyles;