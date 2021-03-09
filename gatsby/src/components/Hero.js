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
    background-color: var(--blue);
    white-space: pre-wrap;
    color: white;
    cursor: default;

    @media (max-width: 768px) {
        margin-top: 0;
    }
    @media(max-width: 590px) {
        font-size: 1.5em;
        white-space: pre-wrap;
        /* margin-top: var(--header-height); */
    }
    @media(max-width: 320px) {
        font-size: 1em;
        white-space: break-spaces;
    }
    .Typewriter__wrapper {
        width: 50vw;
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
    .navigation:hover {
        background-color: var(--nav-hover-color);
    }
 
    `;

export default function Hero() {
    console.log(Link);
    return (
    <HeroStyles>
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
    </HeroStyles> 

    
    )
    
}
