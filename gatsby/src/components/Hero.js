import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import BasicPageStyles from '../styles/BasicPageStyles';


const HeroStyles = styled.div`
    margin: 0;
    margin-top: var(--headerHeight);
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.25;
    font-family: monospace;
    width: 100vw;
    height: auto; //help get rid of scroll bars
    /* background-color: var(--blue); */
    white-space: pre-wrap;
    color: white;
    cursor: default;
    text-align: center;
    --typewriter-width: /*888px;*/ 800px;
    --typewriter-height: /*500px;*/ 450px;
    --monitor-stand-top: 540px;
    --monitor-base-top: 42px;
    /* background: var(--heroBackground); */

    .Typewriter {
        background-color: var(--monitorBackgroundColor);
        ;
        /* border: 1px solid var(--navColor);
        border-radius: 12px; */
        //below is test for computer screen look
        /* width: 50vw;
        height: 50vh; */
        width: var(--typewriter-width); //64vw; basing off of vw does work when the user's browser is odd shaped
        height: var(--typewriter-height); //36vh;
        border: 17.5px solid #333;
        border-radius: 8.75px;
        overflow-y: scroll;

        /* margin-top: 37.85px; */ //remove so it is higher on the page
        display: inline-block;
        box-shadow: 0px 0px 10px -2px var(--heroBoxShadowColor);
    }
    .Typewriter::-webkit-scrollbar {
        width: 15px;
    }
    .Typewriter::-webkit-scrollbar-thumb {
        background: #000;
    }


    .Typewriter__wrapper {
        width: 50vw;
    }
    
    //stand for screen
    .monitor-stand:before {
        content: "";
        display:inline-block;
        position:relative;
        background: #222;
        width: 150px;
        height: 50px;
        top: var(--monitor-stand-top);
        
    }
    .monitor-stand:after {
        content:"";
        display:inline-block;
        position:relative;
        background:#333;
        border-top-left-radius: 8.75px;
        border-top-right-radius: 8.75px;
        width: 300px;
        height: 15px;
        top: var(--monitor-base-top);
    }
    .monitor {
        position: relative;
        z-index: 2;
    }
    #printed-container a {
        color: white;
    }
    @media (max-width: 1035px) {
        margin-top: var(--headerHeight);
        --typewriter-width: 605px; //keep 16:9 ratio
        --typewriter-height: 340px;
        --monitor-stand-top: 429px;
        /* --monitor-base-top: 42px; */
    }
    @media(max-width: 768px) {
        --typewriter-width: 300px; //keep 16:9 ratio
        --typewriter-height: 169px;
        font-size: 1.5rem;
        white-space: pre;
        --monitor-stand-top: 254px;
        
        
    }
    @media(max-width: 388px) {
        --typewriter-width: 177px; //keep 16:9 ratio
        --typewriter-height: 315px;
        --monitor-stand-top: 326px;
        font-size: 1rem;
        white-space: pre;
        .Typewriter {
            overflow-x: hidden;
        }
        
        .monitor-stand::after {
            display: none;
        }
        .monitor-stand::before {
            width: 30px;
            height: 30px;
            border-radius: 100%;
        }
    }
    
    /* #gatsby-focus-wrapper .Typewriter .Typewriter__wrapper .var-highlight{
        color: #C0AD60;
    }
    #gatsby-focus-wrapper .Typewriter .Typewriter__wrapper .tag-highlight {
        color: var(--tag-highlight);
    } */
    .navigation {
        transition: all 0.25s ease-in-out;
    }
    .string {
        color: var(--string);
    }
   
    .misc {
        color: var(--misc);
    }
    .attribute-name {
        color: var(--attribute-name);
        font-style: italic;
    }
    /* .navigation:hover {
        background-color: var(--navHoverColor);
    } */
 
    `;

export default function Hero() {
    return (
        <BasicPageStyles>
    <HeroStyles>
        <div className="monitor-stand">
            <div className="monitor">
        <Typewriter onInit = {(typewriter) => {
            typewriter.changeDelay(1).typeString(`
<span id="printed-container" class="code">
&lt;<span class="tag-highlight">div </span><span class="attribute-name">class</span>=<span class="string">"NavbarLinks__MenuContainer"</span>&gt;
&lt;<span class="tag-highlight">a </span><span class="attribute-name">class</span>=<span class="string">"NavbarLinks__NavItem"</span><span  class="attribute-name">href</span>=<span class="string">"/about"</span>&gt;<a href="/about" class="navigation">About</a>&lt;/a&gt;
&lt;<span class="tag-highlight">a </span><span class="attribute-name">class</span>=<span class="string">"NavbarLinks__NavItem"</span><span  class="attribute-name">href</span>=<span class="string">"/contact"</span>&gt;<a href="/contact" class="navigation">Contact</a>&lt;/a&gt;
&lt;<span class="tag-highlight">a </span><span class="attribute-name">class</span>=<span class="string">"NavbarLinks__NavItem"</span><span  class="attribute-name">href</span>=<span class="string">"/blog"</span>&gt;<a href="/blog" class="navigation">Blog</a>&lt;/a&gt;
&lt;<span class="tag-highlight">/div</span>&gt;
</span>
            
        `).start();
        }} />
            </div>
        </div>
    </HeroStyles> 
    </BasicPageStyles>
    
    )
    
}