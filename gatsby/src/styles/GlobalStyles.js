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
    --TechContainerColumns: 1fr 1fr 1fr 1fr 1fr;
    --TechContainerGridGap: 2px;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
        font-size: 10px;
        font-family: var(--fontFamily);
        overflow: var(--htmlOverflow);
        /* overflow-y: scroll; */
        /* min-height: 100vh; */
    }
    body {
        margin: 0;
        min-height: 100vh;
        max-width: 100%;
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