import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

// import BackgroundImage from 'gatsby-background-image';

const HeroStyles = styled.div`
    --blue: #193549;
    --tag-highlight: #9EFFFF; //baby blue
    --attribute-name:#FFC600; //orang-ish
    --string: #A5FF90; //lime green
    --source: #FFFFFF; //white
    --misc: #FF9D00; //dark orange, used for equal sign


    margin: 0;
    font-weight: bold;
    font-size: 1.75em;
    line-height: 1.25;
    font-family: monospace;
    white-space: pre;
    width: 100vw;
    height: 100vh;
    background-color: var(--blue);
    word-wrap: break-word;
    white-space: pre;

    color: white;
    cursor: default;

    
    /* #gatsby-focus-wrapper .Typewriter .Typewriter__wrapper .var-highlight{
        color: #C0AD60;
    }
    #gatsby-focus-wrapper .Typewriter .Typewriter__wrapper .tag-highlight {
        color: var(--tag-highlight);
    } */
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
    /* .attribute-name {
        background-color: red;
    } */
    /* #printed-container span.attribute-name {
        background-color: purple;
    } */
   

    /* .code {
        white-space: normal;
        text-indent: 150px;
    } */
    .navigation:hover {
        background-color: purple;
    }
 
    `;

export default function Hero() {
        
    return (
    <HeroStyles>
        <Typewriter onInit = {(typewriter) => {
            typewriter.typeString(`
<span id="printed-container" class="code">
    &lt;<span class="tag-highlight">ul </span><span class="attribute-name">id</span>=<span class="string">"menu"</span><span class="attribute-name">className</span>=<span class="string">"dropdown-menu"</span>&gt;
        &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
            &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"learn-more-link"</span><span class="attribute-name">href</span>=<span class="string">"#learn-more"</span>&gt;<span class="navigation">About</span>&lt;/a&gt;
        &lt;/li&gt;
        &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
            &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"education-link"</span><span class="attribute-name">href</span>=<span class="string">"#education"</span>&gt;<span class="navigation">Education</span>&lt;/a&gt;
        &lt;/li&gt;
            &lt;<span class="tag-highlight">li </span><span class="attribute-name">className</span>=<span class="string">"dropdown-content"</span>&gt;
            &lt;<span class="tag-highlight">a </span><span class="attribute-name">className</span>=<span class="string">"technology-link"</span><span class="attribute-name">href</span>=<span class="string">"#technology"</span>&gt;<span class="navigation">Technologies</span>&lt;/a&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
</span>
            
        `).start();
        }} />
    </HeroStyles> 

    
    )
    
}
