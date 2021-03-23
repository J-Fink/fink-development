import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --blue: #193549;
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
    overflow-x: hidden;
    }
    html {
        font-size: 10px;
        font-family: monospace;
    }
    body {
        margin: 0;
    }
`;
export default GlobalStyles;