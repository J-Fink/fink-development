import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Link } from 'gatsby';

// import BackgroundImage from 'gatsby-background-image';

const HeroStyles = styled.div`
    margin: 0;
    margin-top: var(--header-height);
    font-weight: bold;
    font-size: 1.75em;
    line-height: 1.25;
    font-family: monospace;
    width: 100vw;
    height: 100vh;
    /* background-color: var(--blue); */
    white-space: pre-wrap;
    color: white;
    cursor: default;
    text-align: center;
    --typewriter-width: 888px;
    --typewriter-height: 500px;
    --monitor-stand-top: 628px;
    --monitor-base-top: 42px;
    background: var(--heroBackground);

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
        border: 1em solid #333;
        border-radius: 0.5em;
        overflow-y: scroll;

        margin-top: 5vh;
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
        border-top-left-radius:.5em;
        border-top-right-radius:.5em;
        width: 300px;
        height: 15px;
        top: var(--monitor-base-top);
    }
    .monitor {
        position: relative;
        z-index: 2;
    }
    @media (max-width: 1035px) {
        margin-top: var(--header-height);
        --typewriter-width: 605px; //keep 16:9 ratio
        --typewriter-height: 340px;
        --monitor-stand-top: 467px;
        /* --monitor-base-top: 42px; */
    }
    @media(max-width: 768px) {
        --typewriter-width: 300px; //keep 16:9 ratio
        --typewriter-height: 169px;
        font-size: 1.5em;
        white-space: pre-wrap;
        --monitor-stand-top: 292px;
        /* --monitor-base-top: 42px; */
        /* margin-top: var(--header-height); */
    }
    @media(max-width: 388px) {
        --typewriter-width: 177px; //keep 16:9 ratio
        --typewriter-height: 315px;
        --monitor-stand-top: 364px;
        font-size: 1em;
        white-space: break-spaces;
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
    /* #printed-container {
        border: 1px solid white;
    } */
    
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
    // console.log(Link);
    return (
    <HeroStyles>
        <div className="monitor-stand">
            <div className="monitor">
        <Typewriter onInit = {(typewriter) => {
            typewriter.changeDelay(1).typeString(`
<span id="printed-container" class="code">
&lt;<span class="tag-highlight">ul </span><span class="attribute-name">id</span>=<span class="string">"menu"</span><span class="attribute-name">className</span>=<span class="string">"dropdown-menu"</span>&gt;
 &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
  &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"learn-more-link"</span><span  class="attribute-name">href</span>=<span class="string">"#learn-more"</span>&gt;<span class="navigation">About</span>&lt;/a&gt;
   &lt;/li&gt;
 &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
     &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"education-link"</span><span  class="attribute-name">href</span>=<span class="string">"#education"</span>&gt;<span class="navigation">Education</span>&lt;/a&gt;
 &lt;/li&gt;
  &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
   &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"technology-link"</span><span  class="attribute-name">href</span>=<span class="string">"#technology"</span>&gt;<a href="/technologies" class="navigation">Technologies</a>&lt;/a&gt;
 &lt;/li&gt;
&lt;/ul&gt;
</span>
            
        `).start();
        }} />
            </div>
        </div>
    </HeroStyles> 

    
    )
    
}
