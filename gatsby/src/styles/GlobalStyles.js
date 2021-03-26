import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    /* --nav-hover-color: var(--navHoverColor)#214661;; */
    --nav-text-hover-color: var(--navTextHoverColor)/*#214661;*/;
    --header-height: var(--headerHeight);
    --footer-height: var(--footerHeight);
    --nav-font-size: 1.75rem /*var(--navFontSize)*/;
    --blue: rgba(25, 53, 73, 1); //#193549; 
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orange-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign
    --transition-duration: 0.75s;
    --footer-height: 64px;
    --nav-box-background-color: var(--navBoxBackgroundColor);
    --text-color: var(--textColor);
    
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