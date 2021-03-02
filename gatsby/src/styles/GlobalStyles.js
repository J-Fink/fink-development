import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --blue: #193549;
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orange-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign
    --header-height: 7.5vh;
    --nav-color:/* #0B5351; */ rgba(11, 83, 81, 0.85);
    --nav-hover-color: /*#214661;*/rgba(33, 70, 97, 0.85)
    }
    body {
        margin: 0;
    }
`;
export default GlobalStyles;