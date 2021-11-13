import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
    :root {
    --boxShadow: rgb(0 0 0 / 20%) 2px 2px 3px;
    --blue: rgba(25, 53, 73, 1); //#193549; 
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orange-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign
    --transition-duration: 0.75s;
    --htmlOverflow: visible;
    --bodyOverflow: hidden;
    --bodyHeight: auto;
    overflow-x: hidden;
    }
    html {
        font-size: 10px;
        font-family: var(--fontFamily);
        overflow: var(--htmlOverflow);
        /* min-height: 100vh; */
    }
    body {
        min-height: 100vh;
        width: 100vw;
        margin: 0;
        background: var(--heroBackground);
        /* background-repeat: repeat; */
        color: var(--textColor);
        background-attachment: fixed; //this keeps the background fixed 
    }
    .emphasis {
        font-style: italic;
        background: var(--navColor);
    }
    @media (max-width: 768px) {

        html.noscroll {
            overflow: hidden;
        }
        body.noscroll {
            overflow: visible;
            min-height: 100vh;
        }

    }
`;
export default GlobalStyles;