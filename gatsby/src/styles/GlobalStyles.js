import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    
    --blue: rgba(25, 53, 73, 1); //#193549; 
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orange-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign
    --transition-duration: 0.75s;
    overflow-x: hidden;
    }
    html {
        font-size: 10px;
        font-family: var(--fontFamily);
        overflow: scroll;
    }
    body {
        margin: 0;
        background: var(--backgroundColor);
        color: var(--textColor);
    }
`;
export default GlobalStyles;